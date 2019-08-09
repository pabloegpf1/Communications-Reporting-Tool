const pgp = require("pg-promise")();
const db = require("../config/db-connection");

let baseQuery = `sm_s.id,sm_s.account,sm_s.social_media as social_media_id, s_media_a.name as social_media_account, sm_s.headline, sm_s.message, 
                sm_s.language, sm_s.uploaded, sm_s.has_video, sm_s.proactivity, sm_s.added_by, sm_s.comments, sm_s.photo_count,sm_s.video_url, 
                sm_s.source_url, sm_s.date,s_media.social_media, d.headline as dissemination_headline,d.lead_paragraph, d.summary as summary, d.pr_news, d.id as dissemination, 
                sm_s.classification as classification_id, c.classification FROM sm_share sm_s, social_media s_media, social_media_account s_media_a, 
                dissemination d, classification c 
                WHERE sm_s.social_media = s_media.id AND sm_s.account = s_media_a.id AND sm_s.dissemination = d.id AND sm_s.classification = c.id`;

//Create
exports.addShare = smShare =>db.none("INSERT INTO sm_share ($1:name) VALUES ($1:list)", [smShare]);
exports.addSocialMediaAccount = account =>db.none("INSERT INTO social_media_account ($1:name) VALUES ($1:list)", [account]);
exports.addSocialMedia = socialMedia =>db.none("INSERT INTO social_media (social_media) VALUES ($1)", [socialMedia]);

//Read
exports.getShares = () =>db.any(`SELECT $1:raw ORDER BY date DESC`, [baseQuery]);
exports.getSocialMedias = () =>db.any(`SELECT * FROM social_media`);
exports.getSocialMediaAccounts = () =>db.any(`SELECT sma.id,sma.name,sma.url,sm.social_media FROM social_media sm, social_media_account sma WHERE sma.social_media = sm.id`);
exports.getShareById = id =>db.one(`SELECT $1:raw AND sm_s.id = $2`, [baseQuery, id])
exports.getSharesByDate = (initial,final) =>db.any(`SELECT $1:raw AND d.date >= $2 AND d.date < $3 ORDER BY date`,[baseQuery,initial,final]);
exports.getSharesByDissemination = dissemination_id =>db.any("SELECT $1:raw AND sm_s.dissemination = $2", [baseQuery,dissemination_id]);

//Update
exports.updateShare = (share, id) =>db.none(pgp.helpers.update(share, null, "sm_share") + "WHERE id = " + id);

//Delete
exports.deleteShare = impact_id =>db.none("DELETE FROM sm_share WHERE id=($1)", [impact_id]);

