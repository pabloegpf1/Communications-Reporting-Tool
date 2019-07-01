var Dissemination = require('../models/queries/dissemination');
var Media = require('../models/queries/media');

exports.showDisseminations = (request,response) =>{
    Dissemination.getDisseminations()
    .then(disseminations =>{
        response.render('disseminations',{
            title: 'Disseminations',
            disseminations: disseminations,
            admin: request.user.admin,
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showDisseminationsByType = (request,response) =>{
    Dissemination.getDisseminationsByType(request.params.id)
    .then(disseminations =>{
        response.render('disseminations',{
            title: 'Disseminations',
            disseminations: disseminations,
            admin: request.user.admin,
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showNewDisseminationForm = (request,response) =>{
    Dissemination.getDisseminations()
    .then(disseminations =>{
        response.render('newDissemination',{
            medias: medias,
            disseminations:disseminations,
            admin: request.user.admin,
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showDisseminationDetails = (request,response) =>{
    Dissemination.getDisseminationById(request.params.id)
    .then(dissemination =>{
        response.render('disseminationDetails',{
            dissemination: dissemination,
            admin: request.user.admin,
        })  
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showEditDisseminationForm = (request,response) =>{
    Dissemination.getDisseminationById(request.params.id)
    .then(dissemination =>{
        var date = new Date(dissemination.date.toDateString())
        dissemination.date = date.getFullYear() + '-'+ ('0' + (date.getMonth()+1)).slice(-2) + '-'+ ('0' + date.getDate()).slice(-2)
        response.render('editDissemination',{
            dissemination: dissemination,
            admin: request.user.admin,
        })
    })  
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.addDissemination = (request,response) =>{
    let newPublication = createPublicationFromRequest(request.body,request.user.id)
    Publication.addPublication(newPublication)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.searchDissemination = (request,response) =>{
    Dissemination.searchDissemination(request.body.string)
    .then(disseminations =>{
        response.render('disseminations',{
            title: 'Search Results',
            disseminations: disseminations,
            admin: request.user.admin,
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.editDissemination = (request,response) =>{
    let newPublication = createPublicationFromRequest(request.body)
    Publication.updatePublication(newPublication,request.params.id)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.deleteDissemination = (request,response) =>{
    Publication.deletePublication(request.params.id)
    .then(() => response.redirect('/publications'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

const createDisseminationFromRequest = function(data,user_id){
    return publication = {
        added_by: user_id,
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