const db = require('./index');
const pgp = require('pg-promise')();

//Read
exports.getPublicationByTag = (tag) => db.any('SELECT publication FROM tag WHERE tag = $1',[tag])
//Create
exports.tagPublication = (publication_id,tag) => db.none('INSERT INTO tag (publication,tag) VALUES ($1,$2)',[publication_id,tag])


