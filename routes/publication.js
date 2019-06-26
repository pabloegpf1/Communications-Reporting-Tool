var express = require('express');
var router = express.Router();
var PublicationController = require('../controllers/publications')

function loggedIn(request, response, next) {
    if (request.user) next();
    else response.redirect('/');
}

//GET Requests
router.get('/', loggedIn, function(request,response){
    PublicationController.showPublications(request,response)
})

router.get('/type/:id', loggedIn, function(request,response){
    PublicationController.getPublicationTypes(request,response)
})

router.get('/add', loggedIn, function(request,response){
    PublicationController.showNewPublicationForm(request,response)
})

router.get('/:id', loggedIn, function(request,response){
    PublicationController.showPublicationDetails(request,response)
})

router.get('/edit/:id', loggedIn, function(request,response){
    PublicationController.showEditPublicationForm(request,response)
})

router.get('/delete/:id', loggedIn, function(request,response){
    PublicationController.deletePublication(request,response)
})

//POST Requests
router.post('/add', loggedIn, function(request,response){
    PublicationController.addPublication(request,response)
})

router.post('/search/', loggedIn, function(request,response){
    PublicationController.searchPublication(request,response)
})

router.post('/edit/:id', loggedIn, function(request,response){
    PublicationController.editPublication(request,response)
})

module.exports = router;

