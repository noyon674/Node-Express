const express = require('express')
const app = express()

//get request use for getting data
app.get('/', (req, res)=>{
    res.send('I am GET request of Home route')
    res.end()
})

//post request use for upload data
app.post('/', (req, res)=>{
    res.send('I am POST request of Home route')
    res.end()
})

//put request use for update data
app.put('/', (req, res)=>{
    res.send('I am PUT request of Home route')
    res.end()
})

//delete request use for delete data
app.delete('/', (req, res)=>{
    res.send('I am DELETE request of Home route')
    res.end()
})

module.exports = app