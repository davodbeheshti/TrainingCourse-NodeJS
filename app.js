const express = require('express');

const app = express();

// view engine
app.set('view engine' , 'ejs');
app.set('views' , 'views')


app.listen(3000, () => console.log('server is runnint on port 3000'));