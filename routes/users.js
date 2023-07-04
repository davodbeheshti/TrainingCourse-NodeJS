const { Router } = require('express');
// const Yup = require('yup');

const router = new Router();

// const schema = Yup.object().shape({
//     fullname: Yup.string()
//         .required("نام و نام خانوادگی الزامی می باشد")
//         .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
//         .max(255, "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد"),
//     email: Yup.string()
//         .email("ایمیل معتبر نمی باشد")
//         .required("ایمیل الزامی می باشد"),
//     password: Yup.string()
//         .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
//         .max(255, "کلمه عبور نباید بیشتر از 255 کاراکتر باشد")
//         .required("کلمه عبور الزامی می باشد"),
//     confirmPassword: Yup.string()
//         .required("تکرار کلمه عبور الزامی می باشد")
//         .oneOf([Yup.ref("password"), null]),
// });

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

    // schema.validate(req.body)
    //     .then((result) => {
    //         res.redirect("/users/login");
    //     }).catch(err => {
    //         res.render("register", { pageTitle: "ثبت نام کاربر", path: "/register", errors: err.errors });
    //     })
})


module.exports = router;