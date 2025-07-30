const express = require('express') // commomjs
const { getHomepage, getabc, getPunno, postCreateUsers } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage)
router.get('/abc', getabc)
router.get('/punno', getPunno)

router.post('/create-user', postCreateUsers)

module.exports = router