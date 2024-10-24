const { homeController, registerController } = require('../controllers/user.controller')
const userRouter = require('express').Router()

userRouter.get('/', homeController)
userRouter.post('/register', registerController)

module.exports = userRouter