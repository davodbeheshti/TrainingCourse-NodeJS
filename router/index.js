const { Router } = require('express');

const router = new Router();

router.get("/", (req, res) => {
    res.send("index", { pageTitle: 'وبلاگ' })
})

module.exports.router = router;