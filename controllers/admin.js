const Todo = require("../models/todo");
// const { generateRandomId } = require("../utils/todos");

exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect('/');
    try {
        await Todo.create({text: req.body.todo});
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTodo = (req, res) => {
    Todo.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/');
    }).catch(err => console.log(err))
}

exports.completedTodo = (req, res) => {
    // Todo.setTodoToComplete(req.params.id, (err) => {
    //     if (!err) res.redirect("/")
    //     else console.log(err);
    // })
    Todo.findByPk(req.params.id).then(todo => {
        todo.completed = true;
        return todo.save();
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}