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

    static deleteTodo(id, callback) {
        fs.readFile(filePath, ((err, fileContent) => {
            let parseFiles = JSON.parse(fileContent)
            console.log("=====>>>>", parseFiles, typeof id);
            parseFiles = parseFiles.filter(f => f.id !== Number(id));
            fs.writeFile(filePath, JSON.stringify(parseFiles), (err) => {
                callback(err)
            })
        }))
    }

    static setTodoToComplete(id, callback) {
        fs.readFile(filePath, (err, fileContent) => {
            let parseFile = JSON.parse(fileContent);
            parseFile.find(f => f.id === Number(id)).completed = true;
            // parseFile.map(x => {
            //     if (x.id === Number(id)) {
            //         x.completed = true;
            //     }
            // })
            fs.writeFile(filePath, JSON.stringify(parseFile), (err) => {
                callback(err)
            })
        })
    }
}
module.exports = Todo;