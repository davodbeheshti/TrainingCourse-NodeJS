const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))

app.get('/', (req, res) => {
    if (req.session.page_view) {
        req.session.page_view++;
        res.send(`your visited this page ${req.session.page_view} times`);
    } else {
        req.session.page_view = 1;
        res.send("welcome to this page for the first time!");
    }
})


app.listen(3000, () => console.log("server is running on port 3000"))