//import fs module from node
const fs = require('fs');

//create file: writeFile() methods overwrite the previous text
/*
fs.writeFile('demo.txt', 'this is dummy text', (err)=>{
    if(err) console.log(err)
        else console.log('Successfully created')
})
*/

//appendFile() method adds new text with the previous text
fs.appendFile('demo.txt', 'I am 24 years old. ', (err)=>{
    if(err) console.log(err)
        else console.log('successfully added text')
})