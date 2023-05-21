const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/hello', (req, res, next) => {
    res.send('<h1>hello world</h1>')
    // next()
})

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname , '../' , 'views' , 'index.html'))
})

module.exports = router;