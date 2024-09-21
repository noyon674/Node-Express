const userRouter = require('express').Router();

userRouter.get('/', (req, res)=>{
    res.send('GET home route')
    res.end()
})

userRouter.post('/', (req, res)=>{
    res.send('POST home route')
    res.end()
})

userRouter.delete('/', (req, res)=>{
    res.send('DELETE home route')
    res.end()
})

module.exports = userRouter