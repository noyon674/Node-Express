const userRouter = require('express').Router()


userRouter.get('/', (req, res)=>{
    console.log(req.newName)
    console.log("I am Home")
    res.send('I am Home')
})

userRouter.get('/about', (req, res)=>{
    console.log(req.newName)
    console.log("I am about")
    res.send('I am about')
})

module.exports = userRouter