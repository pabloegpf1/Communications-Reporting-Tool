var Users = require('../models/queries/users');
var Publication = require('../models/queries/impact');
var Medias = require('../models/queries/media');

exports.showUsers = (request,response) =>{
    Users.getUsers()
    .then(users=>response.render('adminUsers',{
        admin: request.user.admin,
        title: "Users",
        users: users
    }))
    .catch(err => response.status(500).send(err))
}

exports.showPublicationSettings = (request,response) =>{
    Publication.getPublicationTypes()
    .then(types => response.render('publicationSettings',{
        admin: request.user.admin,
        title: "Publication Settings",
        publicationTypes: types,
    }))
    .catch(err => response.status(500).send(err))
}

exports.showMediaSettings = (request,response) =>{
    Medias.getAll()
    .then(data => response.render('mediaSettings',{
        admin: request.user.admin,
        title: "Media Settings",
        medias: data[0],
        mediaTypes: data[1],
        mediaContents: data[2]
    }))
    .catch(err => response.status(500).send(err))
}

exports.showContributionsByUser = (request,response) =>{
    Publication.getPublicationsByUser(request.params.id)
    .then(publications =>{
        console.log(publications)
        response.render('publications',{
            publications: publications,
            admin: request.user.admin,
            title: "User Contributions"
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showNewUserForm = (request,response) =>{
    response.render('newUser',{
        admin: request.user.admin,
    })
}

exports.changeUserStatus = (request,response) =>{
    Users.changeStatus(request.params.id)
    .then(()=>response.redirect('/admin/users'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.deleteUser = (request,response) =>{
    Users.deleteUser(request.params.id)
    .then(()=>response.redirect('/admin/users'))
    .catch(err => response.render('error',{message:"Error",error:err}))
}