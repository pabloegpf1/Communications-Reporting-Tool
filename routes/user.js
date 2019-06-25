var express = require('express');
var router = express.Router();
var UserController = require('../Controllers/users')

// GET Requests
router.get('/contributions/', function(request,response) {
    UserController.showContributionsByUser(request,response)
});

router.get('/edit', function(request,response) {
    UserController.editUser(request,response)
});

router.get('/sign-out', function(request,response) {
    UserController.signOut(response)
});

// POST Requests
router.post('/add', function(request,response) {
    UserController.addUser(request,response)
});

module.exports = router;
