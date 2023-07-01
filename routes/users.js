const { Router } = require('express');
const Yup = require('yup');

const router = new Router();

const schema = Yup.object().shape({
    fullname: Yup.string().required().min(4).max(255),
    email: Yup.string().required(),
    password: Yup.string().min(4).max(255).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null])
})

router.get('/login', (req, res) => {
    res.render('login', { pageTitle: "ورود به بخش مدیریت", path: "/login" })
})

router.get('/register', (req, res) => {
    res.render('register', { pageTitle: "ثبت نام کاربر", path: "/register" })
})

router.post('/register', (req, res) => {
    const validator = schema.isValid(req.body);
    console.log(validator);
    if (validator) {
        res.send('all good');
    } else {
        res.send('err')
    }
})


module.exports = router;