const express = require('express') // commomjs
//import express from 'express'; // es modules
// const path = require('path') //
const app = express() // app express
const port = 8080 // port

//config template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})
app.get('/punno', (req, res) => {
    //res.send('<h1>ABC</h1>')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
