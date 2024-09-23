const express = require('express')
const app = express();
const userRouter = require('./router')

app.use(userRouter)

app.use((req, res)=>{
    res.send('Page not found')
    res.end()
})

module.exports = app