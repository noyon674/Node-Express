const app = require('express')();
const userRouter = require('./router')

const myMiddleware = (req, res, next)=>{
    const name = req.query.name;
    console.log('I am middleware');
    req.newName = name+" Sarker"
    next()
}
app.use(myMiddleware, userRouter)

module.exports = app;