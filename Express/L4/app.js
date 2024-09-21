const app = require('express')();
const userRouter = require('./router')

app.use('/api/user', userRouter)

app.use((req, res)=>{
    res.send('Page not found')
    res.end()
})

module.exports = app