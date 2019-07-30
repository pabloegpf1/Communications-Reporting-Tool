const pgp = require("pg-promise")();
const db = require("./db-connection");

let baseQuery = `sm_s.id, s_media_a.name as social_media_account, sm_s.headline, sm_s.message, sm_s.language, sm_s.uploaded, sm_s.has_video,
                sm_s.proactivity, sm_s.added_by, sm_s.comments, sm_s.photo_count,sm_s.video_url, sm_s.source_url, sm_s.date, 
                s_media.social_media, d.headline as dissemination_headline, d.summary as summary, d.pr_news, d.id as dissemination, 
                c.classification FROM sm_share sm_s, social_media s_media, social_media_account s_media_a, dissemination d, classification c 
                WHERE sm_s.social_media = s_media.id AND sm_s.account = s_media_a.id AND sm_s.dissemination = d.id AND sm_s.classification = c.id`;

//Create
exports.addSmShare = smShare =>
  db.none("INSERT INTO sm_share ($1:name) VALUES ($1:list)", [smShare]);

//Read
exports.getShares = () =>
  db.any(`SELECT $1:raw ORDER BY date DESC`, [baseQuery]);
exports.getSocialMedias = () =>
  db.any(`SELECT * FROM social_media`);
exports.getSocialMediaAccounts = () =>
  db.any(`SELECT * FROM social_media_account`);
exports.getShareById = id =>
  db.one(`SELECT $1:raw AND sm_s.id = $2`, [baseQuery, id])

  

//Update

  
//Delete

