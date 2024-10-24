const { 
    homeController, 
    loginController, 
    registerController } = require('../controllers/controllers')
    
const runValidator = require('../middleware/runValidator')
const userRouter = require('express').Router()
const { registerValidation, loginValidation } = require('../middleware/validation')


userRouter.get('/', homeController)
userRouter.post('/register', registerValidation, runValidator, registerController)

userRouter.post('/login', loginValidation, runValidator, loginController)

module.exports = userRouter