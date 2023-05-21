const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./router/admin');
const homeRoutes = require('./router/home');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin' , adminRoutes);
app.use(homeRoutes);


app.listen(3000);














// app.get('/davod', (req , res) => {
//     res.send('hello davod');
// })

// app.get('/', (req , res) => {
//     res.send('hello world');
// })
 // adonisjs - koa - sailsjs


//  const server = http.createServer(app);


//  server.listen(3000);