const userRouter = require('express').Router();
const { 
    homeController, 
    createUser, 
    deleteUser, 
    updateUser, 
    findOne} = require('../controllers/user.controller');

userRouter.get('/', homeController)
userRouter.get('/:id', findOne)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUser)
userRouter.patch('/:id', updateUser)

module.exports = userRouter