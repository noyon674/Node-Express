const userRouter = require('express').Router();

//json file send
userRouter.get('/', (req, res)=>{
    res.status(200).json({
        "message": "Hi, I am a home page",
        statusCode: 200
    })
})

// redirect to the login page
userRouter.get('/details', (req, res)=>{
    res.redirect('/login')
})

//file send
userRouter.get('/register', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html")
})

//set cookies
userRouter.get('/login', (req, res)=>{
    res.cookie("name", "Noyon")
    res.cookie("age", 23)
    //passing value to the header
    res.append("userID", 10001)
    res.end()
})

//cleaar cookies
userRouter.get('/clearCookie', (req, res)=>{
    res.clearCookie("name")
    res.end()
})

//passign data to header
module.exports = userRouter