var express = require('express');
var router = express.Router();

router.get('/users', function(req,res) {
    res.render('adminContents',{
        admin:true,
        title: "Users"
    })
});

router.get('/publication-types', function(req,res) {
    res.render('adminContents',{
        admin:true,
        title: "Publication Types"
    })
});

router.get('/medias', function(req,res) {
    res.render('adminContents',{
        admin:true,
        title: "Medias"
    })
});

router.get('/media-types', function(req,res) {
    res.render('adminContents',{
        admin:true,
        title: "Media Types"
    })
});

router.get('/media-contents', function(req,res) {
    res.render('adminContents',{
        admin:true,
        title: "Media Contents"
    })
});

module.exports = router;
