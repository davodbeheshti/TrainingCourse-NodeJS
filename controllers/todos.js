const Todo = require("../models/todo");
const todoUtils = require('../utils/todos')


exports.getIndex = (req, res) => {
    let completedWork = 0;
    let notCompletedWork = 0;
    Todo.fetchAll((todos) => {
        todos.map(t => {
            if (t.completed) {
                completedWork += 1;
            } else {
                notCompletedWork += 1;
            }
        })
        res.render("index", {
            pageTitle: "کارهای روزمره",
            todos,
            completedWork,
            notCompletedWork
        })
    })
}

