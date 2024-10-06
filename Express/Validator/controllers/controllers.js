const path = require('path');
const userModel = require('../models/user.model')
const { uuid } = require('uuidv4');

//find all users
const allUsers = async (req, res)=>{
    try {
        const users = await userModel.find({})
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
};

//create new users
const createUser = async (req, res)=>{
    try {
        const newUser = new userModel({
            id: uuid(),
            name: req.body.name,
            age: req.body.age
        })
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
       res.status(500).json(error.message) 
    }
};

//find a user by id
const findOne = async (req, res)=>{
    try {
        const user = await userModel.find({id: req.params.id})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//delete user by id
const deleteOne = async (req, res)=>{
    try {
        await userModel.deleteOne({id: req.params.id})
        res.status(201).json('Product deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//update user
const updateUser = async (req, res)=>{
    try {
       await userModel.updateOne({id: req.params.id}, {$set: {name: req.body.name, age: req.body.age}})
       res.status(201).json('Product updated')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//file upload
const uploadFile = (req, res)=>{
    res.status(201).sendFile(path.join(__dirname+"/../views/index.html"))
}


module.exports = {
    allUsers,
    createUser,
    findOne,
    deleteOne,
    updateUser,
    uploadFile
}