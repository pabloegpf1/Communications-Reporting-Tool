var Publication = require('../Models/queries/publication');
var User = require('../Models/queries/users');

exports.showContributionsByUser = (request,response) => {
    Publication.getPublicationsByUser(0) //Admin (TODO)
    .then(publications =>{
        response.render('publications',{
            publications: publications,
            admin: true,
            title: "My Contributions"
        })
    })
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.addUser = (request,response) => {
    User.addUser(request.body)
    .then(() => response.redirect('/')) //TODO: if admin go to user dashboard
    .catch(err => response.render('error',{message:"Error",error:err}))
}

exports.editUser = (request,response) => {
    response.render('userInfo',{
        admin:true
    })
}

exports.signOut = (response) => {
    response.redirect('/')
}