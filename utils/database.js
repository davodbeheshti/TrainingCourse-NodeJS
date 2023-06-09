const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_db', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => console.log("connected tod database"))
.catch((err) => console.log(err))