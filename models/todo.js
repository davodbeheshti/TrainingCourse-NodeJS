const fs = require('fs');
const path = require('path');

class Todo {
    constructor(id , text , completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    save(callback) {
        fs.writeFile()
    }
}