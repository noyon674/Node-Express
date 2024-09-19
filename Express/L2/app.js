const express = require('express')
const app = express()

//get request
app.get('/', (req, res)=>{
    res.send('I am get request of Home route')
})

//post request
app.post('/', (req, res)=>{
    console.log('I am post request of Home route')
})


module.exports = app