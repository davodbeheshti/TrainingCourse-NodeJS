const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');


router.get('/hello', (req, res, next) => {
    // res.send('<h1>hello world</h1>')
    res.sendFile(path.join(rootDir , 'views' , 'hello.html'))
    // next()
})



router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir , 'views' , 'index.html'))
})

module.exports = router;