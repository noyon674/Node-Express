const {
    findAllController,
    findOneController,
    createUserController,
    updateOneController,
    deleteUserController,
    deleteAllUsers
} = require('../controllers/user.controller');
const userRouter = require('express').Router();

userRouter.get('/',findAllController);
userRouter.get('/:id', findOneController);
userRouter.post('/', createUserController)
userRouter.patch('/:id', updateOneController)
userRouter.delete('/:id', deleteUserController);
userRouter.delete('/', deleteAllUsers)

module.exports = userRouter;