const pgp = require("pg-promise")();
const db = require("../config/db-connection");

//Create
exports.addDissemination = dissemination =>
  db.one("INSERT INTO dissemination ($1:name) VALUES ($1:list) RETURNING id", [dissemination]);
//Read
exports.getDisseminations = () =>db.any(`SELECT id, headline, lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination d ORDER BY date DESC`);
exports.getAvailableDisseminations = () =>db.any(`SELECT id, headline,lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination d WHERE include_in_report = true ORDER BY date DESC`);
exports.getDisseminationById = id =>db.one(`SELECT id, headline,lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination d WHERE id = $1`,[id]);
exports.getDisseminationsByDate = (initial,final) =>db.any(pgp.as.format(`SELECT id, headline,lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination d WHERE include_in_report = true AND date >= $1 AND date <= $2 ORDER BY date DESC`,[initial,final]));
exports.searchDissemination = string =>db.any(`SELECT id, headline, lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination WHERE unaccent(summary) ILIKE unaccent('%$1:value%') ORDER BY date DESC`,[string]);
exports.getDisseminationsByUser = user_id =>db.any("SELECT id, headline, lead_paragraph, summary, date, added_by, pr_news, url FROM dissemination WHERE added_by = $1",[user_id]);
//Update
exports.updateDissemination = (dissemination, id) => db.none(pgp.as.format(pgp.helpers.update(dissemination, null, "dissemination") +"WHERE id = " +id));
//Delete
exports.deleteDissemination = dissemination_id =>db.none("DELETE FROM dissemination WHERE id=($1)", [dissemination_id]);
