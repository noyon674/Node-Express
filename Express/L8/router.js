const userRouter = require('express').Router()

userRouter.get('/', (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

module.exports = userRouter