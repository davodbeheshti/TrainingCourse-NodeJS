const path = require('path');

const express = require('express');
const indexRoutes = require('./routes')

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views')
console.log(11);
// static folder
app.use(express.static(path.join(__dirname, 'public')))

console.log(15);
// routes
app.use(indexRoutes);
console.log(18);
app.listen(3000, () => console.log('server is runnint on port 3000'));