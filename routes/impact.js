var express = require('express');
var router = express.Router();
var ImpactController = require('../controllers/impact')

function loggedIn(request, response, next) {
    if (request.user) next();
    else response.redirect('/');
}

//GET Requests
router.get('/', loggedIn, function(request,response){
    ImpactController.showImpacts(request,response)
})

router.get('/type/:id', loggedIn, function(request,response){
    ImpactController.showImpactsByType(request,response)
})

router.get('/dissemination/:id', loggedIn, function(request,response){
    ImpactController.showImpactsByDissemination(request,response)
})

router.get('/add', loggedIn, function(request,response){
    ImpactController.showNewImpactForm(request,response)
})

router.get('/:id', loggedIn, function(request,response){
    ImpactController.showImpactDetails(request,response)
})

router.get('/edit/:id', loggedIn, function(request,response){
    ImpactController.showEditImpactForm(request,response)
})

router.get('/delete/:id', loggedIn, function(request,response){
    ImpactController.deleteImpact(request,response)
})

//POST Requests
router.post('/add', loggedIn, function(request,response){
    ImpactController.addImpact(request,response)
})

router.post('/search/', loggedIn, function(request,response){
    ImpactController.searchImpact(request,response)
})

router.post('/edit/:id', loggedIn, function(request,response){
    ImpactController.editImpact(request,response)
})

module.exports = router;

