var Users = require('../Models/queries/users');
var Publication = require('../Models/queries/publication');
var Medias = require('../Models/queries/media');

exports.showUsers = (request,response) =>{
    Users.getUsers()
    .then(users=>response.render('adminUsers',{
        admin:true,
        title: "Users",
        users: users
    }))
    .catch(err => response.status(500).send(err))
}

exports.showPublicationSettings = (request,response) =>{
    Publication.getPublicationTypes()
    .then(types => response.render('publicationSettings',{
        admin:true,
        title: "Publication Settings",
        publicationTypes: types,
    }))
    .catch(err => response.status(500).send(err))
}

exports.showMediaSettings = (request,response) =>{
    Medias.getAll()
    .then(data => response.render('mediaSettings',{
        admin:true,
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
            admin: true,
            title: "User Contributions"
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.showNewUserForm = (request,response) =>{
    response.render('newUser',{
        admin:true
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