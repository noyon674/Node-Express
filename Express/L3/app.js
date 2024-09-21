const express = require('express')
const app = express()
const userRouter = require('./router')

//use all routes
app.use('/api/user', userRouter)

//others route
app.use((req, res)=>{
    res.send('Page not found')
    res.end()
})

module.exports = app