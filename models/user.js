const { data } = require('jquery');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        uniq: true,
    },
    password: {
        type : String,
        require: true,
        minlength : 4,
        maxlenght: 255
    },
    createdAt : {
        type : Date,
        default : Date.now 
    }

})

const User = mongoose.model('User' , UserSchema)

module.exports = User; 