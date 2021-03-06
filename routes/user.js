var express = require("express")
var router = express.Router()
var UserController = require("../controllers/users")
const passport = require("passport")

function loggedIn(request, response, next) {
  if (request.user) next()
  else response.redirect("/user/login")
}

// GET Requests

router.get('/login', function(request, response) {
	response.render('login', {
		authMessage: request.flash('authMessage')
	});
});

router.get("/contributions/", loggedIn, function(request, response) {
  UserController.showContributionsByUser(request, response)
})

router.get("/edit/", loggedIn, function(request, response) {
  UserController.showEditUserForm(request, response)
})

router.get("/sign-out", loggedIn, function(request, response) {
  UserController.signOut(request, response)
})

// ----- POST Requests -----

router.post("/add", loggedIn, function(request, response) {
  UserController.addUser(request, response)
})

// This router controls where to take user if authentication success/failure
router.post("/login",
  passport.authenticate("local", { 
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
  })
)

router.post("/edit/:id", loggedIn, function(request, response) {
  UserController.editUser(request, response)
})

module.exports = router
