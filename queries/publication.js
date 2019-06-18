const db = require('./index');
const pgp = require('pg-promise')();

//Create
exports.addPublication = (publication) => db.none('INSERT INTO publication ($1:name) VALUES ($1:list)',[publication])
//Read
exports.getPublications = () => db.any(
    `SELECT p.id, p.headline, p.summary, p.media_section, p.spokesperson, p.comments, p.language, p.date, p.published, p.has_video, 
    p.statements, p.proactivity, p.publication_type, p.pr_news, p.photo_count, p.url, p.shortened_url,m.name, m.id as media_id, 
    m_t.type, m_t.id as media_type_id, m_c.id as media_content_id, m_c.content
    FROM publication p, publication_type p_type, media m, media_type m_t,media_content m_c 
    WHERE m.media_type = m_t.id AND m.content = m_c.id AND p.media = m.id AND p.publication_type = p_type.id`)
exports.getPublicationById = id => db.one(
    `SELECT p.id, p.headline, p.summary, p.media_section, p.spokesperson, p.comments, p.language, p.date, p.published, p.has_video, 
    p.statements, p.proactivity, p.publication_type, p.pr_news, p.photo_count, p.url, p.shortened_url,m.name, m.id as media_id, 
    m_t.type, m_t.id as media_type_id, m_c.id as media_content_id, m_c.content
    FROM publication p, publication_type p_type, media m, media_type m_t,media_content m_c 
    WHERE m.media_type = m_t.id AND m.content = m_c.id AND p.media = m.id AND p.publication_type = p_type.id AND p.id = $1`,[id])
exports.getPublicationTypes = () => db.any('SELECT id,type FROM publication_type ORDER BY type DESC;')
exports.getPublicationsByDate = date => db.any('SELECT * FROM publication WHERE date = $1',[date])
exports.getPublicationsByHeadline = string => db.any('SELECT * FROM publication WHERE headline LIKE %$1%',[string])
exports.getPublicationsByMedia = media => db.any('SELECT * FROM publication WHERE media = $1',[media])
exports.getPublicationsByUser = username => db.any('SELECT * FROM publication WHERE added_by = $1',[username])
exports.getPublicationsBySpokesperson = spokesperson => db.any('SELECT * FROM publication WHERE spokesperson = $1',[spokesperson])
exports.getPublicationsWithVideo = has_video => db.any('SELECT * FROM publication WHERE has_video = $1',[has_video])
//Delete
exports.deletePublication = (publication_id) => db.none('DELETE FROM publication WHERE id=($1)',[publication_id])



