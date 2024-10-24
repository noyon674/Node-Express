const express = require('express');
const userRouter = require('./router/router');
const app = express();

app.use(userRouter)

app.use((req, res, next)=>{
    res.status(400).json('Page not found!')
})

app.use((err, req, res, next)=>{
    res.status(500).json('Internal Issue')
})

module.exports = app;