const db = require('./index');
const pgp = require('pg-promise')();

//Read
exports.getMedias = () => db.any('SELECT * FROM media')
exports.getMediaContents = () => db.any('SELECT * FROM media_content')
exports.getMediaTypes = () => db.any('SELECT * FROM media_types')
//Create
exports.addMedia = (media) => db.none('INSERT INTO media ($1:name) VALUES ($1:list)',[media])
exports.addMediaType = (type) => db.none('INSERT INTO media_type (type) VALUES ($1)',[type])
exports.addMediaContent = (content) => db.none('INSERT INTO media_content (content) VALUES ($1)',[content])


