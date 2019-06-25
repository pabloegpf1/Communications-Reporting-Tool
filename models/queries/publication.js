const db = require('./index');
const pgp = require('pg-promise')();

let baseQuery = ` p.id, p.headline, p.summary, p.media_section, p.spokesperson, p.comments, p.language, p.date, p.uploaded, p.has_video, 
                        p.statements, p.proactivity, p.type as publication_type, p.pr_news, p.photo_count, p.url, p.shortened_url, m.name, m.id as media_id, 
                        m_t.type, m_t.id as media_type_id, m_c.id as media_content_id, m_c.content 
                        FROM publication p, publication_type p_type, media m, media_type m_t,media_content m_c 
                        WHERE m.type = m_t.id AND m.content = m_c.id AND p.media = m.id AND p.type = p_type.id`

//Create
exports.addPublication = publication => db.none('INSERT INTO publication ($1:name) VALUES ($1:list)',[publication])
//Read
exports.getPublications = () => db.any (`SELECT $1:raw AND p.type = p_type.id ORDER BY date DESC`,[baseQuery])
exports.getPublicationById = id => db.one(`SELECT $1:raw AND p.id = $2`,[baseQuery,id])
exports.searchPublication = string =>  db.any(`SELECT $1:raw AND (unaccent(p.headline) ILIKE unaccent('%$2:value%') 
                                        OR unaccent(p.summary) ILIKE unaccent('%$2:value%')) ORDER BY date DESC`,[baseQuery,string])
exports.getPublicationsByMedia = media => db.any('SELECT * FROM publication WHERE media = $1',[media])
exports.getPublicationTypes = () => db.any('SELECT id,type FROM publication_type ORDER BY type DESC;')
exports.getPublicationsByDate = date => db.any('SELECT * FROM publication WHERE date = $1',[date])
exports.getPublicationsByUser = user_id => db.any('SELECT $1:raw AND added_by = $2',[baseQuery,user_id])
exports.getPublicationsBySpokesperson = spokesperson => db.any('SELECT * FROM publication AND spokesperson = $2',[spokesperson,user_id])
exports.getPublicationsWithVideo = has_video => db.any('SELECT * FROM publication WHERE has_video = $1',[has_video])
//Update
exports.updatePublication = (publication,id) =>db.none(pgp.helpers.update(publication, null, 'publication') + 'WHERE id = '+id)
//Delete
exports.deletePublication = (publication_id) => db.none('DELETE FROM publication WHERE id=($1)',[publication_id])



