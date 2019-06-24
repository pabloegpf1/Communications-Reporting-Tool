var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.render('stats',{
        admin: true,
        charts:[
            {
                type:'ColumnChart',
                data: [
                    ['Month','Impacts'],
                    ['January',42], ['February',19], ['March',52], ['April',30], ['May',6], ['June',27], ['July',37], ['August',5], ['September',24],
                    ['October',24], ['November',42], ['December',34]
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
