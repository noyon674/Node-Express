const mongoose = require('mongoose');
const config = require('../config/config')

const DBURL = config.db.db_link

mongoose
.connect(DBURL)
.then(()=>{
    console.log('MongoDB is connected')
})
.catch((err)=>{
    console.log(err.message)
    process.exit(1)
})