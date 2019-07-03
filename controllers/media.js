var Media = require('../models/queries/media');

exports.showMediaNames = (request,response) => {
    Media.getMediaNames()
    .then(data => response.send(data))
    .catch(err => response.status(500).send(err))
}

exports.showNewMediaForm = (request,response) => {
    Media.getMediaTypes()
    .then(types => {
        response.render('newMedia',{
            types: types,
            admin: request.user.admin,
        })
    })
    .catch(err => response.status(500).send(err))
}

exports.addMedia = (request,response) => {
    let media = {
        name:request.body.name,
        type:request.body.type,
        content:request.body.content,
        coverage:request.body.coverage,
        format:request.body.format,
        url:request.body.url
    }
    Media.addMedia(media)
    .then(() => response.redirect('/impacts/add'))
    .catch(err => response.status(500).send(err))
}

exports.addMediaType = (request,response) => {
    Media.addMediaType(request.body.type)
    .then(() => response.redirect('/medias'))
    .catch(err => response.status(500).send(err))
}

exports.addMediaContent = (request,response) => {
    Media.addMediaContent(request.body.content)
    .then(() => response.redirect('/medias'))
    .catch(err => response.status(500).send(err))
}