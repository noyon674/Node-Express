const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/router');
// creating a express server
const app = express();

//use built-in middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

//database connection
require('./config/db');

//use project middleware
app.use('/api/users', Router)

//client error handle
app.use((req, res, next)=>{
    res.status(401).send("Page not found!")
})

//server error handle
app.use((err, req, res, next)=>{
    res.status(500).send({
        message: 'Something is wrong from server site'
    })
})
module.exports = app