const { Router } = require('express');
// const Yup = require('yup');
const Validator = require('fastest-validator');

const router = new Router();
const v = new Validator();

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

const schema = {
    fullname: {
        type: "string",
        trim: true,
        min: 4,
        max: 255,
        optional: false,
        messages: {
            required: "نام و نام خانوادگی الزامی می باشد",
            stringMin: "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد",
            stringMax: "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد",
        },
    },
    email: {
        type: "email",
        normalize: true,
        messages: {
            emailEmpty: "فیلد ایمیل نباید خالی باشد",
            required: "ایمیل الزامی می باشد",
            string: "آدرس ایمیل را بررسی کنید",
        },
    },
    password: {
        type: "string",
        min: 4,
        max: 255,
        messages: {
            required: "کلمه عبور الزامی می باشد",
            string: "کلمه عبور را بررسی کنید",
            stringMin: "کلمه عبور نباید کمتر از 4 کاراکتر باشد",
            stringMax: "کلمه عبور نمی تواند بیشتر از 255 کاراکتر باشد",
        },
    },
    confirmPassword: {
        type: "string",
        min: 4,
        max: 255,
        messages: {
            required: "تکرار کلمه عبور الزامی می باشد",
            string: "تکرار کلمه عبور را بررسی کنید",
            stringMin: "تکرار کلمه عبور نباید کمتر از 4 کاراکتر باشد",
            stringMax: "تکرار کلمه عبور نباید بیشتر از 255 کاراکتر باشد",
        },
    },
    $$strict: true,
};

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