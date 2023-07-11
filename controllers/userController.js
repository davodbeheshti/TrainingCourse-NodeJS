const User = require("../models/user")

exports.login = (req, res) => {
    res.render('login', { pageTitle: "ورود به بخش مدیریت", path: "/login" })
}

exports.register = (req, res) => {
    res.render('register', { pageTitle: "ثبت نام کاربر", path: "/register" })
}


exports.createUser = async (req, res) => {
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
}