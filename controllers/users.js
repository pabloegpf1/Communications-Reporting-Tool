var Publication = require('../models/queries/publication');
var User = require('../models/queries/users');

exports.showContributionsByUser = (request,response) => {
    Publication.getPublicationsByUser(request.user.id) 
    .then(publications =>{
        response.render('publications',{
            publications: publications,
            admin: request.user.admin,
            title: "My Contributions"
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.addUser = (request,response) => {
    User.addUser(request.body)
    .then(() => {
        if(request.user.admin == true){
            response.redirect('/admin/users')
        }else{
            response.redirect('/publications')
        }})
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.editUser = (request,response) => {
    response.render('userInfo',{
        admin: request.user.admin,
    })
}

exports.signOut = (request,response) => {
    request.logout()
    response.redirect('/')
}