var express = require('express');
var router = express.Router();
var Document = require('../controllers/document')

router.get('/', function(request,response) {
    response.render('login',{
        authMessage: request.flash('authMessage')
    })
});

router.get('/pdf', function(request,response) {
    Document.createPDF(request,response)
});

router.post('/pdf', function(request,response) {
    Document.downloadPDF(request,response)
});

module.exports = router;
