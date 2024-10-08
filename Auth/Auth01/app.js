require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const db_url = process.env.DBURL
const User = require('./models/user')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('Home page')
})

//database connection
mongoose
.connect(db_url)
.then(e=>console.log('MongoDB is connected'))
.catch(err=>{
    console.log(err.message)
    process.exit(1)
})

app.post('/register', async (req, res)=>{
    try {
        const {email, password} = req.body
        const newUser = new User({
            email,
            password
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message);
    }
})

app.post('/login', async(req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        if(user && user.password == password){
            res.status(201).json('Login successful')
        }else res.status(400).json('Creditional not match')
    } catch (error) {
        res.json(error.message)
    }
})

app.use((req, res, next)=>{
    res.status(401).json('Page not found')
})
app.use((err, req, res, next)=>{
    res.status(500).json(err.message)
})
module.exports = app