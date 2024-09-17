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
