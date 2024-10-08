## Node.js and Express tutorial
Node: https://medium.com/@noyon674/learn-node-js-with-noyon-and-take-yourself-to-the-next-level-32b8104338bb </br>
Express: https://medium.com/@noyon674/learn-express-js-with-noyon-573614d03ebe

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
4.
Handling body data first of all we should install body parser package in express. `npm install body-parser` <br/>

Then require body parser `const bodyParser = require('body-parser')`

* `app.use(bodyParser.urlencoder({extended: false}))`
* `app.use(bodyParser.json())`

```JavaScript
//json data and form data similar
userRouter.post('/login', (req, res)=>{
    //bodyparser for body data
    const {name, age} = req.body
    res.send(`${name} and ${age}`)
})
```
## L6
<p>In this lesson we will learn about .env file & calculate area using form data</p>

```JavaScript
userRouter.post('/area', (req, res)=>{
    const {height, width} = req.body
    const result = height * width
    res.send(`The result is ${result}`)
})
```
1. For .end first install `npm i dotenv`
2. where you can use .env file require `require('dotenv').config()`
3. Access the value from .env file `process.env.variable_name`

## L7
<p>In this lecture we will learn about middleware</p>
1. Middleware is just a function, it has three parameters request, response, next

```JavaScript
//auth is a middleware function
const auth = (req, res, next)=>{
    const login = true;
    if(login){
        next()
    }
}

//if login true then 'I am profile page' will be run
userRouter.get('/profile', auth, (req, res)=>{
    res.send('I am Profile page')
})
```
## L8
<p>Static Middleware</p>

1. We can pass the html file but if we add some style or img in the html file design and style not work.

2. The solution is we can do, first create a public file then all the stacit file pick to the public folder

3. Then use static middleware `app.use(express.static('public'))`


## MVC (Model View Controller) Architecture
- Model deal with database
- View means what user sees
- Controller connection between Model and view

```JavaScript
<!-- How works MVC -->
1. view --> router --> controller --> model --> database

//return phase
2. database --> model --> controller --> view
```

## L10
<p>Full function project with MVC architecture and MongoDB database</p>

- express
- cors
- bodyparser
- mongoDB
- MVC

```JavaScript
// api list
1. api/users --> GET
2. api/users:id --> GET
3. api/users --> POST
4. api/users/:id --> PATCH
5. api/users/:id --> DELETE
```

## L11
<p>In this lesson we practiced about CRUD</p>

## L12
<p>In this Lesson we will learn about how to upload file to the server</p>

- For uploading file/image you should install a package which is `npm i multer`

```JavaScript
//copy from multer package
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // create a folder in your app where you want to store the file
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        //creating file name
      const name = Date.now()+'-'+file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })
```
```JavaScript
//for pick the upload file or image
//use the middleware and name will be input tags name
app.post('/upload', upload.single('image'), (req, res)=>{
    res.status(201).send('<h3>File is uploaded</h3>');
})
```

Don't forget the `enctype="multipart/form-data"` in your form.

```JavaScript
<form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <button type="submit">upload</button>
    </form>
```

## L13
<p>In the lesson we learn how to upload file the into the database</p>

## Validator
<p>In the lesson we will learn about express validator</p>

```JavaScript
// name, email, password, date of birth
// api/registre -> frontend route
// using postman
```

## practice validation
<p>In this tutorial practiced the express validation</p>


---
---

## Authentication & Authorization

### Auth01
<p>In this tutorial we learn about low level security which is register and login with same emai, otherwise there is not access.</p>

### Auth02
<p>Database Encryption next level authentication of lower level</p>

`Encrypte password` In this tutorial we will use mongoose encryption. </br>
- install mongoose encryption package
- require to the mongoose shema file
- use `new` keyword beform mongoose schema
- create a key for encryption