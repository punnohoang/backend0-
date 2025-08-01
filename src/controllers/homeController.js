
const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')


const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results }) // x <- y

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

const postCreateUsers = async (req, res) => {

    // res.send('create a new user')

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // let { email, name, city } = req.body;
    //console.log(">>> email = ", email, "; name = ", name, "; city = ", city)

    // connection.query(
    //     `INSERT INTO 
    //     Users(email, name, city)
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Created user succeed !')
    //     }
    // );

    let [results, fields] = await connection.query(`INSERT INTO 
         Users(email, name, city)VALUES(?, ?, ?)`, [email, name, city])

    console.log(results);
    res.send('Created user succeed !')

    // const [results, fields] = await connection.query('select * from Users u')
    // console.log(">>> check :", results)
}
// INSERT INTO Users  (email, name, city)
// VALUES ('test', 'punno', 'nam dinh');

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}


module.exports = {
    getHomepage, getabc, getPunno, postCreateUsers, getCreatePage
}