const Todo = require("../models/todo");
const { generateRandomId } = require("../utils/todos");

exports.addTodo = (req, res) => {
    if (!req.body.todo) return res.redirect('/');
    const todo = new Todo(generateRandomId(), req.body.todo)
    todo.save((err) => {
        if (err) {
            res.redirect('/');
        }
        else {
            console.log(err);
        }
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, (err) => {
        if (!err) res.redirect("/")
        else console.log(err);
    })
}

exports.completedTodo = (req, res) => {
    Todo.setTodoToComplete(req.params.id, (err) => {
        if (!err) res.redirect("/")
        else console.log(err);
    })
}