const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();


// custom middleware
app.use(cookieParser());



app.listen(3000, () => console.log('server is running on port 3000'))