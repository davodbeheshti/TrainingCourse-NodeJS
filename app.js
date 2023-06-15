const path = require('path');

const express = require('express');
const dotEnv = require('dotenv');

const indexRoutes = require('./routes')

/// load config
dotEnv.config({path : './config/config.env'});

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is runnint on port ${PORT}`));