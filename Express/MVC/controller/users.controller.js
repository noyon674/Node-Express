const path = require('path')
const users = require('../models/users.model')

exports.userHome = (req, res)=>{
    res.sendFile(path.join(__dirname+"/../views/home.html"))
}


exports.saveUser = (req, res)=>{
    const {name, age} = req.body
    const newUser = {name, age}
    users.push(newUser)
    res.status(202).send({
        All: users
    })
}
