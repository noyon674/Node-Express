const { homeController, registerController } = require('../controllers/user.controller')
const runValidation = require('../middleware/runValidation')
const { registrationValidation } = require('../middleware/validation')
const userRouter = require('express').Router()

userRouter.get('/', homeController)
userRouter.post('/register', registrationValidation, runValidation, registerController)

module.exports = userRouter