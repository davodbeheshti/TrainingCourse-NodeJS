const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const filePath = path.join(rootDir, 'data', 'todos.json')

class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    save(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            let data;
            if (!fileContent) {
                data = [this];
            } else {
                data = JSON.parse(fileContent);
                data.push(this);
            }
            fs.writeFile(filePath, JSON.stringify(data), (err) => {
                if (err) callback(err)
                else return callback([])
            })
        })
    }

    static fetchAll(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) return [];
            const todos = JSON.parse(fileContent);
            callback(todos);
        })
    }
}
module.exports = Todo;