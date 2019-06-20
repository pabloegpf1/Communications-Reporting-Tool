var express = require('express');
var router = express.Router();
var Users = require('../queries/users');
var Publication = require('../queries/publication');

router.get('/users', function(req,res) {
    Users.getUsers()
    .then(users=>res.render('adminUsers',{
        admin:true,
        title: "Users",
        users: users
    }))
    .catch(err => res.status(500).send(err))
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

router.get('/contributions/:id', function(req,res) {
    Publication.getPublicationsByUser(req.params.id)
    .then(publications =>{
        console.log(publications)
        res.render('publications',{
            publications: publications,
            admin: true,
            title: "User Contributions"
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
});

router.get('/delete-user/:id', function(req,res) {
    Users.deleteUser(req.params.id)
    .then(res.redirect('/admin/users'))
    .catch(err => res.render('error',{message:"Error",error:err}))
});

module.exports = router;
