var express = require('express');
var router = express.Router();

router.get('/contributions', function(req,res) {
    res.render('userContributions',{
        admin:true
    })
});

router.get('/edit', function(req,res) {
    res.render('userInfo',{
        admin:true
    })
});

router.get('/sign-out', function(req,res) {
    res.redirect('/')
});

module.exports = router;
