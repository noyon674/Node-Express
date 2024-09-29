const express = require('express')
const userRouter = require('./router')
const app = express()

app.use(express.static("public"))
app.use(userRouter)

module.exports = app