const express = require('express')
const { body, validationResult } = require('express-validator')
const userRouter = require('./routes/routes')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(userRouter)



//client site error
app.use((req, res, next)=>{
    res.status(401).json('Page not found.')
})

app.use((err, req, res, next)=>{
    res.status(500).json('Internal Error')
})


module.exports = app