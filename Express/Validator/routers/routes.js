const userRouter = require('express').Router();
const { 
    allUsers,
    uploadFile,
    createUser,
    findOne,
    deleteOne,
    updateUser
 } = require('../controllers/controllers');


// all the routes here
userRouter.get('/', allUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', findOne);
userRouter.delete('/:id', deleteOne);
userRouter.patch('/:id', updateUser);

userRouter.get('/upload', uploadFile)



module.exports = userRouter