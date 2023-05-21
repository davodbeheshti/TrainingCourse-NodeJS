const express = require('express');

const router = express.Router();


router.get('/hello', (req, res, next) => {
    res.send('<h1>hello world</h1>')
    // next()
})

router.get("/", (req, res, next) => {
    res.send(
        `<center>
            <form method="POST" action="admin/message">
                <input type="text" name="message" />
                <input type="submit"/>
            </form>
        </center>
        `
    );
})

module.exports = router;