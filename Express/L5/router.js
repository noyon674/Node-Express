const userRouter = require('express').Router()
const bodyparser = require('body-parser');

//gatting data using queay or url
userRouter.get('/', (req, res)=>{
    const {id, name} = req.query
    res.send(`${id} and ${name}`)
})

//getting data using route parameters
userRouter.get('/userID/:id/userAge/:age', (req, res)=>{
    const userId = req.params.id
    const userAge = req.params.age

    res.send(`${userId} and ${userAge}`)
})

//getting data from headers
userRouter.get('/about', (req, res)=>{
    const id = req.header('id')
    const name = req.header('name')

    res.send(`${id} and ${name} from header`)
})

//getting JSON data and form data using postman
userRouter.post('/login', (req, res)=>{
    //bodyparser for body data
    const {name, age} = req.body
    res.send(`${name} and ${age}`)
})
module.exports = userRouter