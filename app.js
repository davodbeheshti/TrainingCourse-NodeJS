const path = require('path');

const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');

const indexRoutes = require('./routes')
const connectDB = require('./config/db');

/// load config
dotEnv.config({path : './config/config.env'});

// dataBase connection
connectDB();

const app = express();

// logging
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is runnint in ${process.env.NODE_ENV} on mode port ${PORT}`));