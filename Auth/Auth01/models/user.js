const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        require: [true, 'Email is required']
    },
    password:{
        type: Number,
        require: [true, 'Password is required']
    }
})

module.exports = mongoose.model('user', userSchema)