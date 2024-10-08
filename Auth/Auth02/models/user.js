require('dotenv').config()
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

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

const encKey = process.env.ENC_KEY

userSchema.plugin(encrypt, { 
    secret: encKey,
    encryptedFields: ['password'] 
});

module.exports = mongoose.model('user', userSchema)