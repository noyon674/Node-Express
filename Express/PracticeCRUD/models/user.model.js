const mongoose = require('mongoose');

//user schema or document structure
const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: [true, 'ID is required']
    },
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    age: {
        type: Number,
        require: [true, 'Age is required']
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('usermodle', userSchema)