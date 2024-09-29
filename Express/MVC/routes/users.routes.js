const { 
    userHome, 
    saveUser } = require('../controller/users.controller')
const usersRouter = require('express').Router()

usersRouter.get('/', userHome)

usersRouter.post('/', saveUser)

module.exports = usersRouter