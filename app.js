const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();


// custom middleware
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
    console.log(res.cookies);
    res.cookie("name", 'express',
        {
            // expires: new Date(Date.now() + 600000),
            maxAge: 600000
        }
    ).send("Cookie has been saved!")
})

app.get("/delete_cookie", (req, res) => {
    res.clearCookie("name").send("Cookie Deleted !");
})



app.listen(3000, () => console.log('server is running on port 3000'))