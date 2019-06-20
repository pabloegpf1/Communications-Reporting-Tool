var express = require('express');
var router = express.Router();
var Media = require('../queries/media');

router.get('/', function(req,res){
    Media.getMedias()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
})

router.get('/add', function(req,res){
    Media.getMediaContents()
    .then(contents =>{
        Media.getMediaTypes()
        .then(types => {
            res.render('newMedia',{
                contents: contents,
                types: types,
                admin: true
            })
        })
    })
    .catch(err => res.status(500).send(err))
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
    .then(() => res.redirect('/publication/add'))
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

module.exports = router;