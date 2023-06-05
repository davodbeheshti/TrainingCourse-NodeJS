const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("todo_db" , "root" , "ab@!NO" , {
    dialect : 'mysql',
    host : "localhost"
});

module.exports = sequelize; 