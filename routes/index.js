var express = require('express');
var router = express.Router();
var items = require('../db/items');

/* GET home page. */
router.get('/', function(req, res) {
  items.getAllItems()
  .then(items =>{
    console.log(items.length)
    res.render('items', {
       items: items
    });
  })
});

module.exports = router;
