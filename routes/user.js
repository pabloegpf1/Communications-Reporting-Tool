var express = require('express');
var router = express.Router();
var Publication = require('../queries/publication');

router.get('/contributions/', function(req,res) {
    Publication.getPublicationsByUser(0) //Admin (TODO)
    .then(publications =>{
        console.log(publications)
        res.render('publications',{
            publications: publications,
            admin: true,
            title: "My Contributions"
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
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
