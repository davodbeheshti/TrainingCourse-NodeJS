const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname , 'public')));

app.set('view engine' , 'pug');
app.set("views" , 'views')

app.get('/' , (req , res) => {
    res.send("<h1>hello world</h1>");
})

app.listen(3000 , () => console.log("server is runing."))