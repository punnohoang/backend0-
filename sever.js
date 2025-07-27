const express = require('express') // commomjs
//import express from 'express'; // es modules

const app = express() // app express
const port = 8080 // port

// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})
app.get('/punno', (req, res) => {
    res.send('<h1>ABC</h1>')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
