const express = require('express')
const router = express.Router()
const {services, desing} = require('../controllers/servicesController')

router.get('/', services)
router.get('/desing', desing)

module.exports = router