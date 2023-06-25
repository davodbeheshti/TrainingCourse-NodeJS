const {Router} = require('express');

const router = new Router();

router.get('/login' , (req , res) => {
    res.render('login' , {pageTitle : "ورود به بخش مدیریت" , path : "/login"})
})

router.get('/register' , (req , res) => {
    res.render('register' , {pageTitle : "ثبت نام کاربر" , path : "/register"})
})

router.post('/register' , (req , res) => {
    console.log(req.body);
    res.send('weblog');
})


module.exports = router;