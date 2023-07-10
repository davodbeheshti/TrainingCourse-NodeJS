const { Router } = require('express');

const User = require('../models/user');

const router = new Router();

router.get('/login', (req, res) => {
    res.render('login', { pageTitle: "ورود به بخش مدیریت", path: "/login" })
})

router.get('/register', (req, res) => {
    res.render('register', { pageTitle: "ثبت نام کاربر", path: "/register" })
})

router.post('/register', async (req, res) => {
    try {
        await User.userValidation(req.body);
        req.redirect('/users/login')
    } catch (err) {
        console.log(err);
        const errors = [];
        err.inner.forEach(e => {
            errors.push({
                name: e.path,
                message: e.message
            })
        });

        return res.render('register', { pageTitle: "ثبت نام کاربر", path: '/register', errors })
    }
})


module.exports = router;