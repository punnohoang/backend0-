
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

    // res.send('create a new user')

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // let { email, name, city } = req.body;
    //console.log(">>> email = ", email, "; name = ", name, "; city = ", city)

    connection.query(
        `INSERT INTO 
        Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);

            res.send('Created user succeed !')
        }
    );
}
// INSERT INTO Users  (email, name, city)
// VALUES ('test', 'punno', 'nam dinh');




module.exports = {
    getHomepage, getabc, getPunno, postCreateUsers
}