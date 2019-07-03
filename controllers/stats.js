var Stats = require('../models/queries/stats');

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

exports.showCharts = (request,response) => {
    Stats.getImpactsByMonth()
    .then(data =>{
        let impactsByMonth = getImpactsByMonth(data)
        console.log(impactsByMonth)
        response.render('stats',{
            admin: request.user.admin,
            charts: generateCharts(impactsByMonth)
        })
    })
    
}

const getImpactsByMonth = function(data){
    var impactsByMonth = new Array();
    impactsByMonth.push({'January':0},{'February':0},{'March':0},{'April':0},{'May':0},{'June':0},{'July':0},{'August':0},{'September':0},{'October':0},{'November':0}
    ,{'December':0})
    for (var i = 0; i<data.length; i++) {
        impactsByMonth[data[i].month] = parseFloat(data[i].Impacts)
    }
    return JSON.stringify(impactsByMonth)
}

const generateCharts = function(impactsByMonth){
    return charts = [
        {
            type:'ColumnChart',
            data: {
                "cols":[
                    {"id":"","label":"Month","pattern":"","type":"string"},
                    {"id":"","label":"Impacts","pattern":"","type":"number"},
                ],
                "rows":[
                    {c:[{f:'January',v:20}]},
                    {c:[{f:'February',v:30}]},
                    {c:[{f:'March',v:0}]},
                    {c:[{f:'April',v:0}]},
                    {c:[{f:'May',v:0}]},
                    {c:[{f:'June',v:0}]},
                    {c:[{f:'July',v:0}]},
                    {c:[{f:'August',v:0}]},
                    {c:[{f:'September',v:0}]},
                    {c:[{f:'October',v:0}]},
                    {c:[{f:'November',v:0}]},
                    {c:[{'December':0}]}
                ]
            },
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
}
