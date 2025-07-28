const express = require('express') // commomjs
//import express from 'express'; // es modules
// const path = require('path') //
require('dotenv').config()

//console.log(process.env)

const app = express() // app express
const port = process.env.PORT || 8888// port => hardcode
const hostname = process.env.HOST_NAME
//config template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')
//config static files 
app.use(express.static('./src'))

// khai bao route
// app.get('/', (req, res) => {
//     res.send('Hello World! PUNNO')
// })

app.get('/abc', (req, res) => {
    res.send('Check abc')
})
app.get('/', (req, res) => {
    //res.send('<h1>ABC</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
