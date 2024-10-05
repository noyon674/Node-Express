const { 
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
 } = require('../controllers/controller');
const Router = require('express')();

Router.get('/', getAllUsers) //get all users
Router.get('/:id', getOneUser) //get user by id
Router.post('/', createUser) //create user
Router.patch('/:id', updateUser) //update user by id
Router.delete('/:id', deleteUser) //delete user by id


module.exports = Router