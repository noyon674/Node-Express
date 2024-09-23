const userRouter = require('express').Router()

//passing data using queay or url
userRouter.get('/', (req, res)=>{
    const {id, name} = req.query
    res.send(`${id} and ${name}`)
})

module.exports = userRouter