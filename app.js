const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname , 'public')));

// app.set('view engine' , 'pug');
app.engine('hbs' , exphbs());
app.set('view engine' , 'hbs');
app.set("views" , 'views')

app.get('/' , (req , res) => {
    const arr = [
        {name : 'davod beheshti' , age : 23},
        {name : 'davod' , age : 24353},
        {name : 'tara hoseini', age : 21},
        {name : 'mona yari' , age : 20},
    ]
    res.render('index' , {titlePage: "first Page with pug" , text : "hello davod jonam" , names : arr})
})

app.listen(3000 , () => console.log("server is runing."))