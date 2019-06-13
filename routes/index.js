var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res) {
    //res.render('index')
    res.redirect('/publications/add')
});

module.exports = router;
