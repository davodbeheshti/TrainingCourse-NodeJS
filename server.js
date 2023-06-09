const express = require('express');
const bodyParser = require('body-parser');

// dataBase Connection
require('./utils/database');
// end dataBase Connection
const { setStatics } = require('./utils/statics');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errorController = require('./controllers/error');

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
app.use(indexRoutes);
app.use('/admin', adminRoutes)
// app.get('/', (req, res) => {
//     res.render('index', { pageTitle: 'کار های روزمره' });
// })
//end of routes 

//404
app.use(errorController.get404)

app.listen(3000, () => console.log('server is running'));
