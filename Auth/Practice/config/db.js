const { default: mongoose } = require('mongoose')
const config = require('./config')

const dbLINK = config.db.db_url

mongoose.connect(dbLINK)
.then(res=>{
    console.log('MongoDB is connected')
})
.catch(err=>{
    console.log(err.message)
    process.exit(1)
})

