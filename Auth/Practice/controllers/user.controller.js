const Users = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');

const findAllController = async(req, res)=>{
    try {
        const users = await Users.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const findOneController = async(req, res)=>{
    try {
        const user = await Users.findOne({id: req.params.id})
        if(user)
            res.status(200).json(user)
        else
        res.status(200).json('User not found')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const createUserController = async(req, res)=>{

    try {
        const newUser = new Users({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateOneController = async(req, res)=>{
    try {
        await Users.updateOne({id: req.params.id}, {$set:{name: req.body.name}})
        res.status(200).json('User is updated')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteUserController = async(req, res)=>{
    try {
        await Users.deleteOne({id: req.params.id})
        res.status(200).json('User is Deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deleteAllUsers = async(req, res)=>{
    try {
        await Users.deleteMany()
        res.status(200).json('Users are Deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}



module.exports = {
    findAllController,
    findOneController,
    createUserController,
    updateOneController,
    deleteUserController,
    deleteAllUsers
};