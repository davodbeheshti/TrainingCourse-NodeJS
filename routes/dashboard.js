const { Router } = require("express");
const {authenticatd} = require("../middlewares/auth")

const router = new Router();

router.get('/' , authenticatd, (req , res) => {
    res.render('dashboard', {pageTitle : "بخش مدیریت | داشبورد" , path : "/dashboard" , layout : "./layouts/dashLayout"})
})


router.get('/login', (req, res) => {
    res.render('login', { pageTitle: "ورود به بخش مدیریت", path: '/login' })
})

module.exports = router;