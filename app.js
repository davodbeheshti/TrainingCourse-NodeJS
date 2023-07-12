const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const connectDB = require('./config/db');

/// load config
dotEnv.config({ path: './config/config.env' });

// dataBase connection
connectDB();

const app = express();

// logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

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
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

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