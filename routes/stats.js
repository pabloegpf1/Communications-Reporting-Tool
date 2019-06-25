var express = require('express');
var router = express.Router();
var StatController = require('../Controllers/stats')

//GET Requests
router.get('/', function(request,response) {
    StatController.showCharts(request,response)
});

module.exports = router;
