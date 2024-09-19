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