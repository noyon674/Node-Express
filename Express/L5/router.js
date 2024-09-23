const userRouter = require('express').Router()

//passing data using queay or url
userRouter.get('/', (req, res)=>{
    const {id, name} = req.query
    res.send(`${id} and ${name}`)
})

//using route parameters
userRouter.get('/userID/:id/userAge/:age', (req, res)=>{
    const userId = req.params.id
    const userAge = req.params.age

    res.send(`${userId} and ${userAge}`)

})
module.exports = userRouter