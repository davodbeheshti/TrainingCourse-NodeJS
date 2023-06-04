const Todo = require("../models/todo");
const todoUtils = require('../utils/todos')


exports.getIndex = (req, res) => {
    todoUtils.getCountWorks(getCount => {
        Todo.fetchAll((todos) => {
            res.render("index", {
                pageTitle: "کارهای روزمره",
                todos,
                completedWork: getCount.completedWork,
                notCompletedWork: getCount.notCompletedWork
            })
        })
    })
}

