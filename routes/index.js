var express = require('express');
var router = express.Router();

router.get('/', function(request,response) {
    response.redirect('publications/')
});

module.exports = router;
