
const connection = require('../config/database')



const getHomepage = (req, res) => {

    return res.render('home.ejs')

    // // process data
    // // call model
    // let users = []
    // connection.query(
    //     'select * from Users u ',

    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>>results--", results); // results contains rows returned by server

    //         console.log('>>> check users: ', users)
    //         res.send(JSON.stringify(users))
    //     }
    // );

}

const getabc = (req, res) => {
    res.send('Check abc')
}
const getPunno = (req, res) => {
    //res.send('<h1>ABC</h1>')
    res.render('sample.ejs')
}

const postCreateUsers = (req, res) => {
    console.log(">>> req.body: ", req.body)
    res.send('create a new user')
}

module.exports = {
    getHomepage, getabc, getPunno, postCreateUsers
}