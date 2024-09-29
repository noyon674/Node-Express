const { userHome } = require('../controller/users.controller')
const usersRouter = require('express').Router()

usersRouter.get('/', userHome)

module.exports = usersRouter