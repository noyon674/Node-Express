## File and content structure

## Lesson1

```
 About local module
```
## Lesson2

```
 About file system module
```
## Lesson3

```
 1. OS module
 2. Path module
```
## Lesson4

```
 HTTP module
```
## Lesson5

```
 External module:
 1. first npm initialize `npm init -y`
 2. install the package `npm i package-name`
 2. require the package
 3. use the package
```
## Lesson6

```
 1. HTTP Routing
 2. Nodemon
```
## Express is all in one package
Express is minimal and flexible Node.js web application backed framework.

## L1
There is the first program for create express app
1. npm initialize `npm init -y`, then install express package `npm i express`
2. Require express package.
```JavaScript
const express = require('express')
```
3. Create express app 
```JavaScript
const app = express();
```
4. Run the app into the port
```JavaScript
const port = 3100;
app.listen(port, ()=>{
    console.log(`app is running at http://localhost:${port}`)
})
```

## L2
In the Lesson-2 we will learn about HTTP methods </br>
1. HTTP `GET` request:

```JavaScript
app.get('/', (req, res)=>{
    res.send('I am GET request of Home route')
    res.end()
})
```
2. HTTP `POST` request

```JavaScript
app.post('/', (req, res)=>{
    res.send('I am POST request of Home route')
    res.end()
})
```
3. HTTP `PUT` request
```JavaScript
app.put('/', (req, res)=>{
    res.send('I am PUT request of Home route')
    res.end()
})
```
4. HTTP `DELETE` request
```JavaScript
app.delete('/', (req, res)=>{
    res.send('I am DELETE request of Home route')
    res.end()
})
```

## L3
In this Lesson we will learn about express routing </br>

```JavaScript
// router.js file
const userRouter = require('express').Router()

userRouter.get('/', (req, res)=>{
    res.send('I am GET request of Home route')
    res.end()
})

userRouter.post('/', (req, res)=>{
    res.send('I am POST request of Home route')
    res.end()
})

userRouter.delete('/', (req, res)=>{
    res.send('I am DELETE request of Home route')
    res.end()
})

module.exports = userRouter
```


```JavaScript
// app.js file
const userRouter = require('./router')

//use all routes
app.use('/api/user', userRouter)


//others route
app.use((req, res)=>{
    res.send('Page not found')
    res.end()
})

module.exports = app
```
## L4
We wil learn about HTTP response.
1. Passing statusCode and json file as a response

```JavaScript
userRouter.get('/', (req, res)=>{
    res.status(200).json({
        "message": "Hi, I am a home page",
        statusCode: 200
    })
})
```
2. Redirect from backend

```JavaScript
userRouter.get('/', (req, res)=>{
    res.redirect('/login')
})
```
3. HTML file send
```JavaScript
userRouter.get('/register', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html")
})
```
4. Cookie set to the browser

```JavaScript
userRouter.get('/login', (req, res)=>{
    res.cookie("name", "Noyon")
    res.cookie("age", 24)
    res.end()
})
```
5. Clear cookies
```JavaScript
userRouter.get('/clearCookie', (req, res)=>{
    res.clearCookie("name")
    res.end()
})
```
6. Passign data to the header
```JavaScript
userRouter.get('/login', (req, res)=>{
    res.append("userID", 10001)
    res.end()
})
```

## L5
This tutorial for HTTP requests <br/>
1. Data gatting using query parameters
```JavaScript
// localhost:3100/?id=1001&name=noyon
userRouter.get('/', (req, res)=>{
    const {id, name} = req.query
    res.send(`${id} and ${name}`)
})
```
2. Data getting using params parameteres
```JavaScript
// localhost:3100/userID/100/userAge/24
userRouter.get('/userID/:id/userAge/:age', (req, res)=>{
    const ID = req.params.id
    const Age = req.params.age

    res.send(`${ID} and ${Age}`)

})
```
3. Data getting from header
```JavaScript
userRouter.get('/about', (req, res)=>{
    const id = req.header('id')
    const name = req.header('name')

    res.send(`${id} and ${name} from header`)
})
```