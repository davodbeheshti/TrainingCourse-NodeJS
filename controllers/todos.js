const Todo = require("../models/todo");
const todoUtils = require('../utils/todos')


exports.getIndex = (req, res) => {
    Todo.count({ where: { completed: true } }).then((completedTodos) => {
        Todo.findAll().then(todos => {
            res.render("index", {
                pageTitle: "کارهای روزمره",
                todos,
                completedTodos,
                notcompletedTodos: todos.length - completedTodos
            })
        })
    })
}

