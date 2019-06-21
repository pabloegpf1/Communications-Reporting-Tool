var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.render('stats',{
        admin: true,
        charts:[
            {
                type:'ColumnChart',
                data: [
                    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    [42, 19, 52, 30, 6, 27, 37,5,24,24,42,34]
                ],
                options: {'title': 'SM posts by month','backgroundColor':'transparent','height':'400'},
                containerId: 'SM posts by month'
            },
            {
                type:'PieChart',
                data: [
                    ['Type', 'Impacts'],
                        ['National',194],
                        ['International',644],
                        ['Local',26],
                    ],
                options: {'title': 'National, international, local','backgroundColor':'transparent','height':'400'},
                containerId: 'National, international, local'
            },
            {
                type:'PieChart',
                data: [
                    ['Content', 'Impacts'],
                        ['General Interest',231],
                        ['Specialised',633]
                    ],
                options: {'title': 'Media Content','backgroundColor':'transparent','height':'400'},
                containerId: 'Media Content'
            },
            {
                type:'PieChart',
                data: [
                    ['Language', 'Impacts'],
                        ['Spanish',69],
                        ['English',390],
                        ['Other',69],
                    ],
                options: {'title': 'Impacts by language','backgroundColor':'transparent','height':'400'},
                containerId: 'Impacts by language'
            }
        ]
    })
});

module.exports = router;
