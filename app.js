const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine' , 'pug');
console.log('sjdlf')
app.engine('hbs', exphbs.engine({
    extname: "hbs",
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    partialsDir: "views/partials",
}));
app.set('view engine', 'hbs');
app.set("views", 'views')

app.get('/about', (req, res) => {
    res.render('index', { titlePage: "about page", text: "hello about page", about: true })
})
app.get('/', (req, res) => {
    const arr = [
        { name: 'davod beheshti', age: 23 },
        { name: 'davod', age: 24353 },
        { name: 'tara hoseini', age: 21 },
        { name: 'mona yari', age: 20 },
    ]
    res.render('index', { titlePage: "first Page with pug", text: "hello davod jonam", names: arr, home: true, hasName: arr.length > 0 })
})

app.listen(3000, () => console.log("server is runing."))