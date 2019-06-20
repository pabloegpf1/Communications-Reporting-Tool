const db = require('./index');

//Create
exports.addMedia = (media) => db.none('INSERT INTO media ($1:name) VALUES ($1:list)',[media])
exports.addMediaType = (type) => db.none('INSERT INTO media_type (type) VALUES ($1)',[type])
exports.addMediaContent = (content) => db.none('INSERT INTO media_content (content) VALUES ($1)',[content])
//Read
exports.getMediaNames = () => db.any('SELECT * FROM media ORDER BY name')
exports.getMedias = () => db.any('SELECT * FROM media ORDER BY name')
exports.getAll = () => db.multi(`SELECT media.id, media.name, media.url,media.coverage,media.format,media_type.type,media_content.content 
                                FROM media,media_type,media_content WHERE media.content = media_content.id AND media.type = media_type.id;
                                SELECT id,type FROM media_type;
                                SELECT id,content FROM media_content;`)
exports.getMediaContents = () => db.any('SELECT id,content FROM media_content')
exports.getMediaTypes = () => db.any('SELECT id,type FROM media_type')
//Delete
exports.deleteMedia = (media_id) => db.none('DELETE FROM media WHERE id=($1)',[media_id])
exports.deleteMediaContent = (media_Content_id) => db.none('DELETE FROM media_content WHERE id=($1)',[media_Content_id])
exports.deleteMediaType = (media_Type_id) => db.none('DELETE FROM media_type WHERE id=($1)',[media_Type_id])




