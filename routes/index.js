var express = require('express');
var router = express.Router();
var items = require('../db/items');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index')
});

module.exports = router;
