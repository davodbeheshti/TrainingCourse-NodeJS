const { Router } = require('express');

const router = new Router();

router.get('/login', (req, res) => {
    res.render('login', { pageTitle: "ورود به بخش مدیریت", path: "/login" }) 
})

router.get('/register', (req, res) => {
    res.render('register', { pageTitle: "ثبت نام کاربر", path: "/register" })
})

router.post('/register', (req, res) => {
    const validate = v.validate(req.body , schema);
    const errorArr = [];

    if(validate === true) {
        const { fullname , email , password , confirmPassword } = req.body;
        if(password !== confirmPassword) {
            errorArr.push({message : "کلمه عبور یکسان نیست !!"})
             
            return res.render("register" , {
                pageTitle : "ثبت نام کاربر",
                path : "/register",
                errors : errorArr
            })
        }
        res.redirect("/users/login");
    }else {
        res.render("register" , {
            pageTitle : "ثبت نام کاربر",
            path : "/register",
            errors : validate
        })
    }
})


module.exports = router;