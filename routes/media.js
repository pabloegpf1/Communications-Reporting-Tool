var express = require('express');
var router = express.Router();
var MediaController = require('../controllers/media')

function loggedIn(request, response, next) {
    if (request.user) next();
    else response.redirect('/');
}

// GET Requests
router.get('/', loggedIn,function(request,response){
    MediaController.showMediaNames(request,response)
})

router.get('/add', loggedIn, function(request,response){
    MediaController.showNewMediaForm(request,response)
})

// POST Requests
router.post('/add', loggedIn, function(request,response){
    MediaController.addMedia(request,response)
})

router.post('/addType', loggedIn, function(request,response){
    MediaController.addMediaType(request,response)
})

router.post('/addContent', loggedIn, function(request,response){
    MediaController.addMediaContent(request,response)
})

module.exports = router;