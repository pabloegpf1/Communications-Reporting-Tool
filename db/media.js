const db = require('./index');
const pgp = require('pg-promise')();

//Create
exports.addMedia = (media) => db.none('INSERT INTO media ($1:name) VALUES ($1:list)',[media])
exports.addMediaType = (type) => db.none('INSERT INTO media_type (type) VALUES ($1)',[type])
exports.addMediaContent = (content) => db.none('INSERT INTO media_content (content) VALUES ($1)',[content])
//Read
exports.getMedias = () => db.any('SELECT * FROM media')
exports.getMediaContents = () => db.any('SELECT * FROM media_content')
exports.getMediaTypes = () => db.any('SELECT * FROM media_type')
//Delete
exports.deleteMedia = (media_id) => db.none('DELETE FROM media WHERE id=($1)',[media_id])
exports.deleteMediaContent = (media_Content_id) => db.none('DELETE FROM media_content WHERE id=($1)',[media_Content_id])
exports.deleteMediaType = (media_Type_id) => db.none('DELETE FROM media_type WHERE id=($1)',[media_Type_id])




