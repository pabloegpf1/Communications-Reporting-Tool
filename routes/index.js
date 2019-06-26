var express = require('express');
var router = express.Router();

router.get('/', function(request,response) {
    response.render('login',{
        authMessage: request.flash('authMessage')
    })
});

module.exports = router;
