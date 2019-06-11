var express = require('express');
var router = express.Router();
var Publication = require('../db/publications');

/* GET home page. */
router.get('/', function(req,res) {
    res.render('index')
});

router.put('/publication', function(req,res,next){
    console.log(appendDate(req.query))
    Publication.addPublication(appendDate(req.query))
    .then(res.send('success'))
    .catch(err =>{
        res.status(500).send(err)
        console.log(err)
    })
})

router.post('/publications', function(req,res,next){
    Publication.getPublications()
    .then(data => res.send(data))
    .catch(err =>{
        res.status(500).send(err)
        console.log(err)
    })
})

module.exports = router;

const appendDate = function(data){
    var date = new Date()
    date.toUTCString
    data.date = date
    return data
}