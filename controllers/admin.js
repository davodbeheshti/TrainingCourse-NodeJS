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

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.destroy({where : {id : req.params.id}});
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

exports.completedTodo = async (req, res) => {
    // Todo.setTodoToComplete(req.params.id, (err) => {
    //     if (!err) res.redirect("/")
    //     else console.log(err);
    // })
    // Todo.findByPk(req.params.id).then(todo => {
    //     todo.completed = true;
    //     return todo.save();
    // })
    // .then(() => res.redirect('/'))
    // .catch(err => console.log(err))
    try {
       const todo = await Todo.findByPk(req.params.id)
       todo.completed = true;
       await todo.save();
       res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    
}