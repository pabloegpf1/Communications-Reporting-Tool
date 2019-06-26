var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users')
const passport = require('passport');

function loggedIn(request, response, next) {
    if (request.user) next();
    else response.redirect('/');
}

// GET Requests
router.get('/contributions/', loggedIn, function(request,response) {
    UserController.showContributionsByUser(request,response)
});

router.get('/edit', loggedIn, function(request,response) {
    UserController.editUser(request,response)
});

router.get('/sign-out', loggedIn, function(request,response) {
    UserController.signOut(request,response)
});

// POST Requests
router.post('/add', loggedIn, function(request,response) {
    UserController.addUser(request,response)
});

router.post('/login',
	passport.authenticate('local', {
		successRedirect: '/publications',
		failureRedirect: '/',
		failureFlash: true
	})
)
  

module.exports = router;
