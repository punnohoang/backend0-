
const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World! PUNNO')
}

const getabc = (req, res) => {
    res.send('Check abc')
}
const getPunno = (req, res) => {
    //res.send('<h1>ABC</h1>')
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getabc, getPunno
}