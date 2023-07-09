const { data } = require('jquery');
const mongoose = require('mongoose');
const  Yap = require('yap');

const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: [true, "نام و نام خانوادگی الزامی میباشد"],
        trim: true
    },
    email: {
        type: String,
        require: true,
        uniq: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 4,
        maxlenght: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const schema = 


const User = mongoose.model('User', userSchema)

module.exports = User; 