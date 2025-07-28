const express = require('express') // commomjs

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! PUNNO')
})

router.get('/abc', (req, res) => {
    res.send('Check abc')
})
router.get('/punno', (req, res) => {
    //res.send('<h1>ABC</h1>')
    res.render('sample.ejs')
})
module.exports = router