const bcrypt = require('bcrypt');
var Publication = require('../models/queries/impact');
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
    let encrypted_pw = bcrypt.hashSync(request.body.password, 9)
    console.log(request.body)
    User.addUser({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        password: encrypted_pw,
        admin: (request.body.admin === undefined) ? false : true,
    })
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