const express = require('express')
const usersRouter = require('./routes/users.routes')
const bodyParser = require('body-parser')

const app = express()

//built-in middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//use router
app.use(usersRouter)

//another route handle
app.use((req, res, next)=>{
    res.status(404).send({
        "message": "Page not found!"
    })
})
module.exports = app