var express = require('express');
var router = express.Router();

const controller = require('../controllers/index')

const middleware = require('../helpers/middleware')

router.get('/', controller.addData);

router.post('/add', middleware.checkData, controller.processAddData);

router.get('/list', controller.viewAllData);

module.exports = router;
