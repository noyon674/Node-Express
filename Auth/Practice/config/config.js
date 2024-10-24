require('dotenv').config();

const dev = {
    app: {
        portCode: process.env.PORT
    },
    db:{
        db_url: process.env.DBLINK
    }
}

module.exports = dev;