require('dotenv').config()
const mysql = require('mysql2/promise')

// create the conection to database


// const connection = mysql.createConnection({
//     host: process.env.DB_HOST, //default: 3306
//     port: process.env.DB_PORT, // default: empty
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST, //default: 3306
    port: process.env.DB_PORT, // default: empty
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: 10,
    connectionLimit: 10,
    queueLimit: 0

});

module.exports = connection;