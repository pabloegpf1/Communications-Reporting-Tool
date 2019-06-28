const db = require('./db-connection');

exports.getPublicationByMonth = () => 
db.any(
    `select to_char(date,'Mon') as mon,
    extract(year from date) as yyyy,
    count("id") as "Impacts"
    from publication
    group by 1,2
`)