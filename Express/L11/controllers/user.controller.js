const { uuid } = require('uuidv4');
const users = require('../models/user.model')

const homeController = async(req, res)=>{
    try {
        const allusers = await users.find()
        res.status(201).json(allusers)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const findOne = async(req, res)=>{
    try {
        const user = await users.findOne({id: req.params.id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const createUser = async (req, res)=>{
    try {
        const newUser = new users({
            id: uuid(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteUser = async(req, res)=>{
    try {
        await users.deleteOne({id: req.params.id})
        res.status(201).json("User is deleted")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateUser = async(req, res)=>{
    try {
        await users.updateOne({id: req.params.id}, {$set:{name: req.body.name,age: req.body.age}})
        res.status(201).json('Update done')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    homeController,
    createUser,
    deleteUser,
    updateUser,
    findOne
}