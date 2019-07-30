var express = require('express')
var router = express.Router()
var SmShareController = require('../controllers/smShare')

function loggedIn(request, response, next) {
	if (request.user) next()
	else response.redirect("/")
  }

router.get('/', loggedIn, function(request, response) {
	SmShareController.showShares(request,response)
});

router.get('/add', loggedIn, function(request, response) {
	SmShareController.showNewShareForm(request,response)
});


router.get("/:id", loggedIn, function(request, response) {
	SmShareController.showShareDetails(request, response)
})

router.get("/edit/:id", loggedIn, function(request, response) {
	SmShareController.showEditShareForm(request, response)
})

router.get("/delete/:id", loggedIn, function(request, response) {
	SmShareController.deleteShare(request, response)
})

// ----- Post Requests -----

router.post('/add', loggedIn, function(request, response) {
	SmShareController.AddShare(request,response)
});

router.post("/edit/:id", loggedIn, function(request, response) {
	SmShareController.editShare(request, response)
})

module.exports = router;
