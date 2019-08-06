const pgp = require("pg-promise")();
const db = require("../config/db-connection");

let baseQuery = `i.date as "Date",m.name as "Media Name",m.url as "Media Web", m_t.type as "Type of Media",m.content as "Media Content", m.coverage as "Media Coverage", 
                i.media_section as "Section", i.headline as "Headline",m.format as "Format", i_type.type as "Type of Publication", i.has_video as "Video", 
                (i.photo_count > 0) as "Photos", i.photo_count as "Nº Photos", i.statements as "Statements", i.spokesperson as "Spokesperson",
                i.language as "Language", i.proactivity as "Proactivity", i.uploaded as "Uploaded", d.pr_news as "PR/News", d.summary as "Summary", i.source_url as "Original URL"
                FROM impact i, impact_type i_type, media m, media_type m_t, dissemination d, classification c
                WHERE m.type = m_t.id AND i.media = m.id AND i.type = i_type.id AND i.dissemination = d.id AND i.classification = c.id`;

exports.getImpacts = () =>db.any(`SELECT $1:raw ORDER BY i.date DESC`, [baseQuery]);
