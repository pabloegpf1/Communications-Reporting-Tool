var express = require('express');
var router = express.Router();
var AdminController = require('../controllers/admin')

//GET Requests
router.get('/users', function(request,response) {
    AdminController.showUsers(request,response)
});

router.get('/publication-settings', function(request,response) {
    AdminController.showPublicationSettings(request,response)
});

router.get('/media-settings', function(request,response) {
    AdminController.showMediaSettings(request,response)
});

router.get('/contributions/:id', function(request,response) {
    AdminController.showContributionsByUser(request,response)
});

router.get('/add-user/', function(request,response) {
    AdminController.showNewUserForm(request,response)
});

router.get('/change-status/:id', function(request,response) {
    AdminController.changeUserStatus(request,response)
});

router.get('/delete-user/:id', function(request,response) {
    AdminController.deleteUser(request,response)
});

module.exports = router;
