exports.authenticatd = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

   res.redirect("/404");
};