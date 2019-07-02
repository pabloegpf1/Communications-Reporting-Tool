const pgp = require('pg-promise')();
const db = require('./db-connection');

let baseQuery = `i.id, i.headline, i.media_section, i.spokesperson, i.comments, i.language, i.date, i.uploaded, i.has_video, 
                i.statements, i.proactivity, i.type as impact_type, i.photo_count, i.url, i.shortened_url,m.content,m.coverage, 
                m.name as media_name, m.id as media_id, m_t.type, m_t.id as media_type_id, d.headline as dissemination_headline, 
                d.summary as summary, d.pr_news, d.id as dissemination
                FROM impact i, impact_type i_type, media m, media_type m_t, dissemination d
                WHERE m.type = m_t.id AND i.media = m.id AND i.type = i_type.id AND i.dissemination = d.id`
//Create
exports.addImpact = impact => db.none('INSERT INTO impact ($1:name) VALUES ($1:list)',[impact])
//Read
exports.getImpacts = () => db.any (`SELECT $1:raw ORDER BY date DESC`,[baseQuery])
exports.getImpactById = id => db.one(`SELECT $1:raw AND i.id = $2`,[baseQuery,id])
exports.searchImpact = string =>  db.any(`SELECT $1:raw AND (unaccent(i.headline) ILIKE unaccent('%$2:value%')) ORDER BY date DESC`,[baseQuery,string])
exports.getImpactTypes = () => db.any('SELECT id,type FROM impact_type')
exports.getImpactsByMedia = media => db.any('SELECT * FROM impact WHERE media = $1',[media])
exports.getImpactsByUser = user_id => db.any('SELECT $1:raw AND i.added_by = $2',[baseQuery,user_id])
//Update
exports.updateImpact = (impact,id) =>db.none(pgp.helpers.update(impact, null, 'impact') + 'WHERE id = '+id)
//Delete
exports.deleteImpact = (impact_id) => db.none('DELETE FROM impact WHERE id=($1)',[impact_id])



