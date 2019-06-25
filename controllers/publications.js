var Publication = require('../models/queries/publication');
var Media = require('../models/queries/media');

exports.showPublications = (request,response) =>{
    Publication.getPublications()
    .then(publications =>{
        response.render('publications',{
            title: 'Latest Publications',
            publications: publications,
            admin: true
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showPublicationsByType = (request,response) =>{
    Publication.getPublicationsByType(request.params.id)
    .then(publications =>{
        response.render('publications',{
            title: 'Latest Publications',
            publications: publications,
            admin: true
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showNewPublicationForm = (request,response) =>{
    Media.getMedias()
    .then(medias =>{
        Publication.getPublicationTypes()
        .then(types =>{
            response.render('newPublication',{
                medias: medias,
                types:types,
                admin: true
            })
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showPublicationDetails = (request,response) =>{
    Publication.getPublicationById(request.params.id)
    .then(publication =>{
        response.render('publicationDetails',{
            publication: publication,
            admin: true
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showEditPublicationForm = (request,response) =>{
    Media.getMedias()
    .then(medias =>{
        Publication.getPublicationTypes()
        .then(types =>{
            Publication.getPublicationById(request.params.id)
            .then(publication =>{
                var date = new Date(publication.date.toDateString())
                publication.date = date.getFullYear() + '-'+ ('0' + (date.getMonth()+1)).slice(-2) + '-'+ ('0' + date.getDate()).slice(-2)
                response.render('editPublication',{
                    publication: publication,
                    medias: medias,
                    types:types,
                    admin: true
                })
            })
        })
    })  
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.addPublication = (request,response) =>{
    let newPublication = createPublicationFromRequest(request.body)
    Publication.addPublication(newPublication)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.searchPublication = (request,response) =>{
    Publication.searchPublication(request.body.string)
    .then(publications =>{
        response.render('publications',{
            title: 'Search Results',
            publications: publications,
            admin: true
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.editPublication = (request,response) =>{
    let newPublication = createPublicationFromRequest(request.body)
    Publication.updatePublication(newPublication,request.params.id)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.deletePublication = (request,response) =>{
    Publication.deletePublication(request.params.id)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

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
        uploaded: (data.published === undefined) ? false : true,
        has_video: (data.has_video === undefined) ? false : true,
        statements: (data.statements === undefined) ? false : true,
        proactivity: (data.proactivity === undefined) ? false : true,
        pr_news: data.pr_news,
        photo_count: data.photo_count,
        type: data.type,
        url: data.url,
        shortened_url: data.shortened_url,
        date: data.date
    }
}