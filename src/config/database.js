require('dotenv').config()
const mysql = require('mysql2')

// create the conection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST, //default: 3306
    port: process.env.DB_PORT, // default: empty
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = connection;