var express = require('express');
var router = express.Router();
var Media = require('../db/media');

router.get('/', function(req,res){
    Media.getMedias()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
})

router.get('/add', function(req,res){
    res.render('newMedia')
})

router.post('/add', function(req,res){
    let media = {
        name:req.body.name,
        type:req.body.type,
        content:req.body.content,
        coverage:req.body.coverage,
        format:req.body.format,
        url:req.body.url
    }
    console.log(media)
    Media.addMedia(media)
    .then(() => res.redirect('/medias'))
    .catch(err => res.status(500).send(err))
})

router.post('/addType', function(req,res){
    Media.addMediaType(req.body.type)
    .then(() => res.redirect('/medias'))
    .catch(err => res.status(500).send(err))
})

router.post('/addContent', function(req,res){
    Media.addMediaContent(req.body.content)
    .then(() => res.redirect('/medias'))
    .catch(err => res.status(500).send(err))
})

router.get('/add', function(req,res){
    res.render('newPublication')
})

module.exports = router;