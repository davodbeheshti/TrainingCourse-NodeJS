const path = require('path');

const express = require('express');
const indexRoutes = require('./routes')

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(indexRoutes);
app.listen(3000, () => console.log('server is runnint on port 3000'));