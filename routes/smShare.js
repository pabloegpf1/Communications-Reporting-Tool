var express = require('express')
var router = express.Router()
var SmShareController = require('../controllers/smShare')

function loggedIn(request, response, next) {
	if (request.user) next()
	else response.redirect("/")
  }

router.get('/', loggedIn, function(request, response) {
	SmShareController.showSmshares(request,response)
});

router.get("/:id", loggedIn, function(request, response) {
	SmShareController.showSmshareDetails(request, response)
})

router.get('/add', loggedIn, function(request, response) {
	SmShareController.showNewSmshareForm(request,response)
});

// ----- Post Requests -----

router.post('/add', loggedIn, function(request, response) {
	SmShareController.AddSmshare(request,response)
});

module.exports = router;
