const userRouter = require('express').Router()

userRouter.get('/', (req, res)=>{
    res.sendFile(__dirname+"/area.html")
})

userRouter.post('/area', (req, res)=>{
    const {height, width} = req.body
    const result = height * width
    res.send(`The result is ${result}`)
})


module.exports = userRouter;