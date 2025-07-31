const express = require('express') // commomjs
const { getHomepage, getabc, getPunno, postCreateUsers, getCreatePage } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage)
router.get('/abc', getabc)
router.get('/punno', getPunno)

router.get('/create', getCreatePage)

router.post('/create-user', postCreateUsers)

module.exports = router