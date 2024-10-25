const express = require('express');
const app = express();
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption');

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//database connection
mongoose.connect('mongodb://localhost:27017/authDB')
.then(res=>console.log('DataBase connected'))
.catch(err=>{
    console.log(err.message)
    process.exit(1)
})

//create mongoose schema
const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:Number,
        required: true
    }
})

const encKey = 'IAMNOYON'

userSchema.plugin(encrypt, { 
    secret: encKey,
    encryptedFields: ['password'] 
})

const user = mongoose.model('user', userSchema)

app.post('/register', async(req, res)=>{
    try {
        const {email, password} = req.body
        const newUser = new user({
            email,
            password
        })
    await newUser.save()
    res.status(200).json('User is registered')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//login
app.post('/login', async(req, res)=>{
    try {
        const {email, password} = req.body
        const findUser = await user.findOne({email:email})

        if( findUser && findUser.password == password){
            res.status(200).json('Login successful')
        }else res.status(200).json('does not match')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

app.use((req, res, next)=>{
    res.status(400).json('Page not found!')
})

app.use((err, req, res, next)=>{
    res.status(500).json('Internal Issue')
})

module.exports = app;