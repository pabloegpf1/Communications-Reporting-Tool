var Impact = require('../models/queries/impact');
var Dissemination = require('../models/queries/dissemination');
var Media = require('../models/queries/media');

exports.showImpacts = (request,response) =>{
    Impact.getImpacts()
    .then(impacts =>{
        response.render('impacts',{
            title: 'Impacts',
            impacts: impacts,
            admin: request.user.admin,
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showImpactsByType = (request,response) =>{
    Impact.getImpactsByType(request.params.id)
    .then(impacts =>{
        response.render('impacts',{
            title: 'Impacts',
            impacts: impacts,
            admin: request.user.admin,
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showImpactsByDissemination = (request,response) =>{
    Impact.getImpactsByDissemination(request.params.id)
    .then(impacts =>{
        response.render('impacts',{
            title: 'Impacts',
            impacts: impacts,
            admin: request.user.admin,
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showNewImpactForm = (request,response) =>{
    Impact.getImpactTypes()
    .then(types => {
        Media.getMedias()
        .then(medias =>{
            Dissemination.getDisseminations()
            .then(disseminations =>{
                response.render('newImpact',{
                    types:types,
                    medias: medias,
                    disseminations:disseminations,
                    admin: request.user.admin,
                })
            })
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showImpactDetails = (request,response) =>{
    Impact.getImpactById(request.params.id)
    .then(impact =>{
        response.render('impactDetails',{
            impact: impact,
            admin: request.user.admin,
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.showEditImpactForm = (request,response) =>{
    Dissemination.getDisseminations()
    .then(disseminations => {
        Media.getMedias()
        .then(medias =>{
            Impact.getImpactTypes()
            .then(types =>{
                Impact.getImpactById(request.params.id)
                .then(impact =>{
                    var date = new Date(impact.date.toDateString())
                    impact.date = date.getFullYear() + '-'+ ('0' + (date.getMonth()+1)).slice(-2) + '-'+ ('0' + date.getDate()).slice(-2)
                    response.render('editImpact',{
                        disseminations: disseminations,
                        impact: impact,
                        medias: medias,
                        types:types,
                        admin: request.user.admin,
                    })
                })
            })
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.addImpact = (request,response) =>{
    let newImpact = createImpactFromRequest(request.body,request.user.id)
    Impact.addImpact(newImpact)
    .then(() => response.redirect('/impacts'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.searchImpact = (request,response) =>{
    Impact.searchImpact(request.body.string)
    .then(impacts =>{
        response.render('impacts',{
            title: 'Search Results',
            impacts: impacts,
            admin: request.user.admin,
        })
    })
    .catch(err => res.render('error',{message:"Error",error:err}))
}

exports.editImpact = (request,response) =>{
    let newImpact = createImpactFromRequest(request.body,request.user.id)
    console.log(newImpact)
    Impact.updateImpact(newImpact,request.params.id)
    .then(() => response.redirect('/impacts'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.deleteImpact = (request,response) =>{
    Impact.deleteImpact(request.params.id)
    .then(() => response.redirect('/impacts'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

const createImpactFromRequest = function(data,user_id){
    return impact = {
        added_by: user_id,
        headline: data.headline,
        dissemination: data.dissemination,
        media: data.media, 
        media_section: data.media_section,
        spokesperson: data.spokesperson,
        comments: data.comments,
        language: data.language,
        uploaded: (data.published === undefined) ? false : true,
        has_video: (data.has_video === undefined) ? false : true,
        statements: (data.statements === undefined) ? false : true,
        proactivity: (data.proactivity === undefined) ? false : true,
        photo_count: data.photo_count,
        type: data.type,
        url: data.url,
        shortened_url: data.shortened_url,
        date: data.date
    }
}