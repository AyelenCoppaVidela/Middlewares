const express = require('express');
const router = express.Router();
const {admin} = require('../controllers/adminController');
const validationAdmin = require('../middlewares/validationAdmin')

router.get('/', validationAdmin ,admin)


module.exports = router