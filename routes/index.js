var express = require('express');
var router = express.Router();

const controller = require('../controllers/index')



router.get('/', controller.addData);

router.post('/add', controller.processAddData);

router.get('/list', controller.viewAllData);

module.exports = router;
