const express = require('express');
const cors = require('cors');
const userRouter = require('./router/router');
const app = express();

//built-in middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// datebase connection
require('./config/db')

//router including
app.use('/api', userRouter)

//clint site error handle
app.use((req, res, next)=>{
    res.status(401).json('Page not found!')
})

//server site error handle
app.use((err, req, res, next)=>{
    res.status(500).json('Internal Issue.')
})
module.exports = app