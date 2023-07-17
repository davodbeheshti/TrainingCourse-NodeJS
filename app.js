const path = require('path');

const debug = require('debug')("weblog-project");
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const winston = require('./config/winston');


const connectDB = require('./config/db');
const mongoose = require('mongoose');

/// load config
dotEnv.config({ path: './config/config.env' });

// dataBase connection
connectDB();
debug("connected to database");

const app = express();

// logging
if (process.env.NODE_ENV === "development") {
    debug("morgan enabled");
    app.use(morgan("combined" , {stream : winston.stream}));
}

// passport configuration
require('./config/passport');

// view engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/mainLayout');
app.set('views', 'views');

//body parser
app.use(express.urlencoded({ extended: false }));

// session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store : new MongoStore({mongoUrl : process.env.MONGO_URI})
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash());

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use("/", require('./routes/blog'));
app.use('/users', require('./routes/users'))
app.use('/dashboard', require('./routes/dashboard'));
app.use((req, res) => {
    res.render('404', { pageTitle: "صفحه پیدا نشد | 404", path: "/404" })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is runnint in ${process.env.NODE_ENV} on mode port ${PORT}`)); 