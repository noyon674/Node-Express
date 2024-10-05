const mongoose = require('mongoose');
const config = require('./config')
const db_url = config.DB_LINK

mongoose
.connect(db_url)
.then(()=>{
    console.log('MongoDB connected')
})
.catch((err)=>{
    console.log(err.message)
    process.exit(1)
})