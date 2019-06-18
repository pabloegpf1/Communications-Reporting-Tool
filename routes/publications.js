var express = require('express');
var router = express.Router();
var Publication = require('../queries/publication');
var Media = require('../queries/media');

router.get('/', function(req,res){
    Publication.getPublications()
    .then(publications =>{
        console.log(publications)
        res.render('publications',{
            pageTitle: 'Latest Publications',
            publications: publications
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.get('/add', function(req,res){
    Media.getMedias()
    .then(medias =>{
        Publication.getPublicationTypes()
        .then(types =>{
            res.render('newPublication',{
                medias: medias,
                types:types
            })
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.get('/id/:id', function(req,res){
    console.log(req.params.id)
    Publication.getPublicationById(req.params.id)
    .then(publication =>{
        console.log(publication)
        res.render('publicationDetails',{
            publication: publication
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

router.post('/search/', function(req,res){
    Publication.getPublicationsByHeadline(req.body.string)
    .then(publications =>{
        console.log(publications)
        res.render('publications',{
            pageTitle: 'Search Results',
            publications: publications
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
})

router.post('/delete/:id', function(req,res){
    Publication.deletePublication(req.params.id)
    .then(() => res.redirect('/publications'))
    .catch(err => res.render('error',{message:"Error",error:err}))
})

module.exports = router;

const createPublicationFromRequest = function(data){
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
        publication_type: data.publication_type,
        url: data.url,
        shortened_url: data.shortened_url,
        date: data.date
    }
}