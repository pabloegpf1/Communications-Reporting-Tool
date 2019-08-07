const pgp = require("pg-promise")();
const db = require("../config/db-connection");

let impactQuery = `i.date as "Date",m.name as "Media Name",m.url as "Media Web", m_t.type as "Type of Media",m.content as "Media Content", m.coverage as "Media Coverage", 
                i.media_section as "Section", i.headline as "Headline",m.format as "Format", i_type.type as "Type of Publication", i.has_video as "Video", 
                (i.photo_count > 0) as "Photos", i.photo_count as "Nº Photos", i.statements as "Statements", i.spokesperson as "Spokesperson",
                i.language as "Language", i.proactivity as "Proactivity", i.uploaded as "Uploaded", d.pr_news as "PR/News", d.summary as "Summary", i.source_url as "Original URL"
                FROM impact i, impact_type i_type, media m, media_type m_t, dissemination d, classification c
                WHERE m.type = m_t.id AND i.media = m.id AND i.type = i_type.id AND i.dissemination = d.id AND i.classification = c.id`;

let shareQuery = `sm_s.date as "Date", s_media.social_media as "Media Name", s_media_a.name as "Account Name", sm_s.message as "Message", sm_s.language as "Language",
                sm_s.proactivity as "Proactivity", sm_s.uploaded as "Uploaded", d.pr_news as "PR/News",c.classification as "Classification", d.summary as "Summary",
                sm_s.source_url as "Source URL", sm_s.comments as "Comments"
                FROM sm_share sm_s, social_media s_media, social_media_account s_media_a, dissemination d, classification c 
                WHERE sm_s.social_media = s_media.id AND sm_s.account = s_media_a.id AND sm_s.dissemination = d.id AND sm_s.classification = c.id`;

exports.getImpacts = (initial_date,final_date) =>db.any(`SELECT $1:raw AND i.date >= $2 AND i.date <= $3 ORDER BY i.date`, [impactQuery,initial_date,final_date]);
exports.getShares = (initial_date,final_date) =>db.any(`SELECT $1:raw AND sm_s.date >= $2 AND sm_s.date <= $3 ORDER BY sm_s.date`, [shareQuery,initial_date,final_date]);
