var express = require('express')
var router = express.Router()
var SmShare = require('../controllers/smShare')

function loggedIn(request, response, next) {
	if (request.user) next()
	else response.redirect("/")
  }

router.get('/', loggedIn, function(request, response) {
	SmShare.showSmshares(request,response)
});

router.get('/add', loggedIn, function(request, response) {
	SmShare.showNewSmshareForm(request,response)
});

module.exports = router;
