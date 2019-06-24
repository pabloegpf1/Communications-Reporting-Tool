var express = require('express');
var router = express.Router();
var Users = require('../Models/queries/users');
var Publication = require('../Models/queries/publication');
var Medias = require('../Models/queries/media');

router.get('/users', function(req,res) {
    Users.getUsers()
    .then(users=>res.render('adminUsers',{
        admin:true,
        title: "Users",
        users: users
    }))
    .catch(err => res.status(500).send(err))
});

router.get('/publication-settings', function(req,res) {
    Publication.getPublicationTypes()
    .then(types => res.render('publicationSettings',{
        admin:true,
        title: "Publication Settings",
        publicationTypes: types,
    }))
    .catch(err => res.status(500).send(err))
});

router.get('/media-settings', function(req,res) {
    Medias.getAll()
    .then(data => res.render('mediaSettings',{
        admin:true,
        title: "Media Settings",
        medias: data[0],
        mediaTypes: data[1],
        mediaContents: data[2]
    }))
    .catch(err => res.status(500).send(err))
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

router.get('/add-user/', function(req,res) {
    res.render('newUser',{
        admin:true
    })
});

router.get('/change-status/:id', function(req,res) {
    Users.changeStatus(req.params.id)
    .then(()=>res.redirect('/admin/users'))
    .catch(err => res.render('error',{message:"Error",error:err}))
});

router.get('/delete-user/:id', function(req,res) {
    Users.deleteUser(req.params.id)
    .then(()=>res.redirect('/admin/users'))
    .catch(err => res.render('error',{message:"Error",error:err}))
});

module.exports = router;
