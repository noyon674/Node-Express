const { 
    homeController,
    registerController,
    loginController
 } = require('../controllers/controllers');
const userRouter = require('express').Router();

//all the routes here
userRouter.get('/', homeController)
userRouter.post('/register', registerController)
userRouter.post('/login', loginController)


module.exports = userRouter