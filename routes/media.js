var express = require('express');
var router = express.Router();
var MediaController = require('../controllers/media')

// GET Requests
router.get('/', function(request,response){
    MediaController.showMediaNames(response)
})

router.get('/add', function(request,response){
    MediaController.showNewMediaForm(response)
})

// POST Requests
router.post('/add', function(request,response){
    MediaController.addMedia(request,response)
})

router.post('/addType', function(request,response){
    MediaController.addMediaType(request,response)
})

router.post('/addContent', function(request,response){
    MediaController.addMediaContent(request,response)
})

module.exports = router;