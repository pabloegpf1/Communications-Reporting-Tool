var express = require('express');
var router = express.Router();
var StatController = require('../controllers/stats')

function loggedIn(request, response, next) {
    if (request.user) next();
    else response.redirect('/');
}

//GET Requests
router.get('/', loggedIn, function(request,response) {
    StatController.showCharts(request,response)
});

module.exports = router;
