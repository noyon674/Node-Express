const express = require('express')
const userRouter = require('./routes/routes')
const app = express()

//built-in middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//app's middleware
app.use('/api', userRouter)

//error handling
app.use((req, res, next)=>{
    res.status(401).json('Page not Found')
})

app.use((err, req, res, next)=>{
    res.status(500).json(err.message)
})

module.exports = app;