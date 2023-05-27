const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require('./utils/statics');

const app = express();

//MiddleWares
app.use(bodyParser.urlencoded({ extended: false }));
//end of middleWares

//ejs
app.set('view engine', 'ejs');
app.set('views', 'views');
// end of ejs

//statics
setStatics(app);
//end of statics

//routes
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'کار های روزمره' });
})
//end of routes 

app.listen(3000, () => console.log('server is running'));