require('dotenv').config();

const dev = {
    portCode: process.env.PORT,
    DB_LINK: process.env.DBURL
}

module.exports = dev