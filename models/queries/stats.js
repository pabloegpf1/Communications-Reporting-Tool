const db = require('./db-connection');

exports.getImpactsByMonth = () => 
db.any(
    `select to_char(date,'FMMonth') as month,
    extract(year from date) as yyyy,
    count("id") as "Impacts"
    from impact
    group by 1,2
    `)
