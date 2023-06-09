const Todo = require("../models/todo");
const todoUtils = require('../utils/todos')


exports.getIndex = async (req, res) => {
    // Todo.count({ where: { completed: true } }).then((completedTodos) => {
    //     Todo.findAll().then(todos => {
    //         res.render("index", {
    //             pageTitle: "کارهای روزمره",
    //             todos,
    //             completedTodos,
    //             notcompletedTodos: todos.length - completedTodos
    //         })
    //     })
    // })
    const completedTodos = await Todo.countDocuments({ completed: true });
    const todos = await Todo.find();
    res.render("index", {
        pageTitle: "کارهای روزمره",
        todos,
        completedTodos,
        notcompletedTodos: todos.length - completedTodos
    })
}

