const express = require('express') // commomjs
//import express from 'express'; // es modules
const path = require('path') //
require('dotenv').config()

//console.log(process.env)
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


const app = express() // app express
const port = process.env.PORT || 8888// port => hardcode
const hostname = process.env.HOST_NAME


//config template engine
configViewEngine(app)

//config static files 
app.use(express.static(path.join(__dirname, 'public')))

// khai bao route
app.use('/', webRoutes)

// test connection 


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
