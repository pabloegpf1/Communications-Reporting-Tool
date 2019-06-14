var express = require('express');
var router = express.Router();
var Publication = require('../db/publication');
var Media = require('../db/media');

router.get('/', function(req,res){
    Publication.getPublications()
    .then(publications => res.render('index',{
        publications: publications
    }))
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.get('/add', function(req,res){
    Media.getMedias()
    .then(medias =>{
        res.render('newPublication',{
            medias: medias
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.post('/add', function(req,res){
    let newPublication = createPublicationFromRequest(req.body)
    console.log(newPublication)
    Publication.addPublication(newPublication)
    .then(() => res.redirect('/publications'))
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.post('/delete', function(req,res){
    Publication.deletePublication(req.body.request_id)
    .then(() => res.redirect('/publications'))
    .catch(err => res.render('error',{message:"Error",error:err}))
})

module.exports = router;

const createPublicationFromRequest = function(data){
    var formattedDate = new Date()
    formattedDate.toUTCString
    return publication = {
        added_by: 0,
        headline: data.headline,
        summary: data.summary,
        media: data.media, 
        media_section: data.media_section,
        spokesperson: data.spokesperson,
        comments: data.comments,
        language: data.language,
        published: (data.published === undefined) ? false : true,
        has_video: (data.has_video === undefined) ? false : true,
        statements: (data.statements === undefined) ? false : true,
        proactivity: (data.proactivity === undefined) ? false : true,
        pr_news: data.pr_news,
        photo_count: data.photo_count,
        url: data.url,
        shortened_url: data.shortened_url,
        date: formattedDate
    }
}