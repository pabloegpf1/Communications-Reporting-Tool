const db = require('./index');
const pgp = require('pg-promise')();

//Create
exports.addPublication = (publication) => db.none('INSERT INTO publication ($1:name) VALUES ($1:list)',[publication])
//Read
exports.getPublications = () => db.any('SELECT * FROM publication INNER JOIN media ON publication.media = media.id INNER JOIN media_type ON media.type = media_type.id ORDER BY publication.date DESC;')
exports.getPublicationsById = id => db.one('SELECT * FROM publications WHERE id = $1',[id])
exports.getPublicationsByDate = date => db.any('SELECT * FROM publications WHERE date = $1',[date])
exports.getPublicationsByHeadline = string => db.any('SELECT * FROM publications WHERE headline LIKE %$1%',[string])
exports.getPublicationsByMedia = media => db.any('SELECT * FROM publications WHERE media = $1',[media])
exports.getPublicationsByUser = username => db.any('SELECT * FROM publications WHERE added_by = $1',[username])
exports.getPublicationsBySpokesperson = spokesperson => db.any('SELECT * FROM publications WHERE spokesperson = $1',[spokesperson])
exports.getPublicationsWithVideo = has_video => db.any('SELECT * FROM publications WHERE has_video = $1',[has_video])
//Delete
exports.deletePublication = (publication_id) => db.none('DELETE FROM publication WHERE id=($1)',[publication_id])



