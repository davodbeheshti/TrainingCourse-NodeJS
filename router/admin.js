const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req , res , next) => {
    res.send('<h1>یک چیز بی ارزش از دست بده یک چیز با ارزش به دست بیار</h1>')
})

router.post('/message', (req, res, next) => {
    console.log(req.body.message);
    fs.writeFile('message.txt', req.body.message, err => {
        if (err) throw err;
        res.redirect('/')
    })
    // next()
})

module.exports = router