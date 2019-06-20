const db = require('./index');

//Create
exports.tagPublication = (publication_id,tag) => db.none('INSERT INTO tag (publication,tag) VALUES ($1,$2)',[publication_id,tag])
//Read
exports.getPublicationsByTag = (tag) => db.any('SELECT publication FROM tag WHERE tag = $1',[tag])
//Delete
exports.deleteTagForPublication = (publication_id,tag) => db.none('DELETE FROM tag WHERE publication_id=($1) AND tag=$2',[publication_id,tag])


