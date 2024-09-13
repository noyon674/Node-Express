//import file system
const fs = require('fs')


fs.rename('demo.txt', 'update.txt', (err)=>{
    if(err){
        console.log(err)
    }else console.log('Successful')
})