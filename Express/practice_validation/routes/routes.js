const { 
    homeController,
    registerController,
    loginController} = require('../controllers/controllers');
const runValidator = require('../middleware/runValidation');
const { 
    registrationValidation, 
    loginValidation } = require('../middleware/validation');
const userRouter = require('express').Router();

//all the routes here
userRouter.get('/', homeController)
userRouter.post('/register', registrationValidation, runValidator, registerController)
userRouter.post('/login', loginValidation, runValidator, loginController)


module.exports = userRouter