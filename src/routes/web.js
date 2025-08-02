const express = require('express') // commomjs
const { getHomepage, getabc, getPunno,
    postCreateUsers, getCreatePage,
    getUpdatePage, postUpdateUsers,
    postDeleteUsers } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage)
router.get('/abc', getabc)
router.get('/punno', getPunno)

router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUsers)
router.post('/update-user', postUpdateUsers)
router.post('/delete-user/:id', postDeleteUsers)

module.exports = router