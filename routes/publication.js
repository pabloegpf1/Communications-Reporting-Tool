var express = require('express');
var router = express.Router();
var PublicationController = require('../controllers/publications')

//GET Requests
router.get('/', function(request,response){
    PublicationController.showPublications(request,response)
})

router.get('/type/:id', function(request,response){
    PublicationController.getPublicationTypes(request,response)
})

router.get('/add', function(request,response){
    PublicationController.showNewPublicationForm(request,response)
})

router.get('/:id', function(request,response){
    PublicationController.showPublicationDetails(request,response)
})

router.get('/edit/:id', function(request,response){
    PublicationController.showEditPublicationForm(request,response)
})

router.get('/delete/:id', function(request,response){
    PublicationController.deletePublication(request,response)
})

//POST Requests
router.post('/add', function(request,response){
    PublicationController.addPublication(request,response)
})

router.post('/search/', function(request,response){
    PublicationController.searchPublication(request,response)
})

router.post('/edit/:id', function(request,response){
    PublicationController.editPublication(request,response)
})

module.exports = router;

