const fs = require('fs');
const path = require('path');

const rootDir = require('./path');
const filePath = path.join(rootDir, 'data', 'todos.json');

exports.getTodos = (callback) => {
    fs.readFile(filePath, (err, fileContent) => {
        console.log("=====>>>", JSON.parse(fileContent));
        if (err) return callback([]);
        callback(JSON.parse(fileContent));
    })
}

exports.saveTodos = (todos, callback) => {
    fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        callback(err);
    })
}

exports.generateRandomId = () => {
    return Math.floor(Math.random() * 1000);
}

exports.getCountWorks = (callback) => {
    this.getTodos(todos => {
        let completedWork = 0;
        let notCompletedWork = 0;
        todos.map(t => {
            if (t.completed) {
                completedWork += 1;
            } else {
                notCompletedWork += 1;
            }
        })
        callback({ completedWork, notCompletedWork , countAllWork : todos.length})
    })
}