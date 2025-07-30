const express = require('express') // commomjs
//import express from 'express'; // es modules
const path = require('path') //
require('dotenv').config()

//console.log(process.env)
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const mysql = require('mysql2')

const app = express() // app express
const port = process.env.PORT || 8888// port => hardcode
const hostname = process.env.HOST_NAME


//config template engine
configViewEngine(app)

//config static files 
app.use(express.static(path.join(__dirname, 'public')))

// khai bao route
app.use('/', webRoutes)

// test connection database
const connection = mysql.createConnection({
    host: 'localhost', //default: 3306
    port: 3307, // default: empty
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

connection.query(
    'select * from Users u ',

    function (err, results, fields) {
        console.log(">>>results--", results); // results contains rows returned by server
        console.log(">>>fields--", fields); // fields contains extra meta data about results, if available
    }
);



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
