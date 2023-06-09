const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_db', {})
.then(() => console.log("connected tod database"))
.catch((err) => console.log(err))