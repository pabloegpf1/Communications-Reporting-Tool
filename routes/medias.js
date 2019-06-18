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
                types: types
            })
        })
    })
    .catch(err => res.status(500).send(err))
})

router.post('/add', function(req,res){
    let media = {
        name:req.body.name,
        media_type:req.body.media_type,
        content:req.body.content,
        coverage:req.body.coverage,
        format:req.body.format,
        media_url:req.body.media_url
    }
    console.log(media)
    Media.addMedia(media)
    .then(() => res.redirect('/publications/add'))
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