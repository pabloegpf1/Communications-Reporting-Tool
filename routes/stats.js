var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.render('stats',{
        admin: true
    })
});

module.exports = router;
