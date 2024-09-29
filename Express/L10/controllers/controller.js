const path = require('path');
const User = require('../models/user.model')
const { v4 : uuidv4 } = require('uuid');

const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find()
        res.status(202).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getOneUser = async (req, res)=>{
    try {
        const user = await User.find({id: req.params.id})
        res.status(202).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const createUser = async (req, res)=>{
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateUser = async (req, res)=>{
    try {
        const {name, age} = req.body
        const user = await User.findOne({id: req.params.id})
        user.name = name;
        user.age = age;
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteUser = async (req, res)=>{
    try {
        await User.deleteOne({id: req.params.id})
        res.status(202).json('User is deleted successfully')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { 
    getAllUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser }