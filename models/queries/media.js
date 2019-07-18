const pgp = require("pg-promise")();
const db = require("./db-connection");

//Create
exports.addMedia = media =>
  db.none("INSERT INTO media ($1:name) VALUES ($1:list)", [media]);
exports.addMediaType = type =>
  db.none("INSERT INTO media_type (type) VALUES ($1)", [type]);
//Read
exports.getMediaNames = () => db.any("SELECT * FROM media ORDER BY name");
exports.getMedias = () => db.any("SELECT * FROM media ORDER BY name");
exports.getAll = () =>
  db.multi(`SELECT media.id, media.name, media.url,media.coverage,media.format,media_type.type,media.content FROM media,media_type WHERE media.type = media_type.id;
                                SELECT id,type FROM media_type;`);
exports.getMediaTypes = () => db.any("SELECT id,type FROM media_type");
//Delete
exports.deleteMedia = media_id =>
  db.none("DELETE FROM media WHERE id=($1)", [media_id]);
exports.deleteMediaType = media_Type_id =>
  db.none("DELETE FROM media_type WHERE id=($1)", [media_Type_id]);
