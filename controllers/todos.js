const Todo = require("../models/todo");

exports.getIndex = (req , res) => {
    Todo.fetchAll((todos) => {
        res.render("index" , {
            pageTitle: "کارهای روزمره",
            todos
        })
    })
}