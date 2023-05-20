// const http = require('http');
const fs = require('fs');


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', (req, res, next) => {
    res.send('<h1>hello world</h1>')
    // next()
})

app.post('/message', (req, res, next) => {
    console.log(req.body.message);
    fs.writeFile('message.txt' , req.body.message , err => {
        if(err) throw err;
        res.redirect('/')
    })
    // next()
})

app.get("/", (req, res, next) => {
    res.send(
        `<center>
            <form method="POST" action="/message">
                <input type="text" name="message" />
                <input type="submit"/>
            </form>
        </center>
        `
    );
})
















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