const { Router } = require('express');
const Yup = require('yup');

const router = new Router();

const schema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی میباشد").min(4).max(255),
    email: Yup.string().required("ایمیل الزامی میباشد"),
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
    // const validator = schema.isValid(req.body);
    // validator.then(result => {
    //     console.log(result);
    //     res.send('all good');
    // }).catch(ex => {
    //     console.log(ex);
    //     res.send('err ')
    // })

    schema.validate(req.body)
        .then((result) => {
            console.log(result);
            res.redirect("/users/login");
        }).catch(err => {
            console.log(err.errors);
            res.render("register", { pageTitle: "ثبت نام کاربر", path: "/register", errors: err.errors });
        })
})


module.exports = router;