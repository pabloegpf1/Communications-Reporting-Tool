const db = require('./index');
const pgp = require('pg-promise')();

//Create
exports.addPublication = (publication) => db.none('INSERT INTO publication ($1:name) VALUES ($1:list)',[publication])
//Read
exports.getPublications = () => db.any('SELECT * FROM media,publication,publication_type,media_type,media_content WHERE publication.media = media.id AND publication.publication_type = publication_type.id AND media.media_type = media_type.id AND media.content = media_content.id')
exports.getPublicationTypes = () => db.any('SELECT id,type FROM publication_type ORDER BY type DESC;')
exports.getPublicationById = id => db.one('SELECT * FROM publication,media,media_type,publication_type WHERE publication.media = media.id AND media.media_type = media_type.id AND publication.publication_type = publication_type.id AND publication.id = ORDER BY publication.date DESC;',[id])
exports.getPublicationsByDate = date => db.any('SELECT * FROM publication WHERE date = $1',[date])
exports.getPublicationsByHeadline = string => db.any('SELECT * FROM publication WHERE headline LIKE %$1%',[string])
exports.getPublicationsByMedia = media => db.any('SELECT * FROM publication WHERE media = $1',[media])
exports.getPublicationsByUser = username => db.any('SELECT * FROM publication WHERE added_by = $1',[username])
exports.getPublicationsBySpokesperson = spokesperson => db.any('SELECT * FROM publication WHERE spokesperson = $1',[spokesperson])
exports.getPublicationsWithVideo = has_video => db.any('SELECT * FROM publication WHERE has_video = $1',[has_video])
//Delete
exports.deletePublication = (publication_id) => db.none('DELETE FROM publication WHERE id=($1)',[publication_id])



