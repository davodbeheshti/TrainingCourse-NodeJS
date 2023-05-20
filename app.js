// const http = require('http');

const express = require('express');

const app = express();

app.get('/davod', (req , res) => {
    res.send('hello davod');
})
app.get('/', (req , res) => {
    res.send('hello world');
})

app.listen(3000);
 // adonisjs - koa - sailsjs


//  const server = http.createServer(app);


//  server.listen(3000);