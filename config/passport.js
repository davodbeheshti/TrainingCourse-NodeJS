const passport = require('passport');
const { Sterategy } = require('passport-local');
const bcrypt = require('cryptjs');

const User = require('../models/User');

passport.use(new Sterategy({ usernamefield: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: "کاربری با این ایمیل ثبت نام نشده است!!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "نام کاربری یا کلمه عبور صحیح نمی باشد!!" })
        }

    } catch (err) {
        console.log(err);
    }
}))

passport.serializeUser((user, done) => {
    done(null, user);
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})
