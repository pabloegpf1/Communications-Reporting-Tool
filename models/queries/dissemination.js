const pgp = require('pg-promise')();
const db = require('./db-connection');

let baseQuery = ` d.id, d.headline, d.summary, d.date, d.added_by, d.pr_news, d.url FROM dissemination d`
//Create
exports.addDissemination = dissemination => db.none('INSERT INTO dissemination ($1:name) VALUES ($1:list)',[dissemination])
//Read
exports.getDisseminations = () => db.any (`SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination d ORDER BY date DESC`)
exports.getDisseminationById = id => db.one(`SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination d WHERE id = $2`,[baseQuery,id])
exports.searchDissemination = string =>  db.any(`SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination WHERE (unaccent(headline) ILIKE unaccent('%$1:value%') 
                                        OR unaccent(summary) ILIKE unaccent('%$1:value%')) ORDER BY date DESC`,[string])
exports.getDisseminationsByUser = user_id => db.any('SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination WHERE added_by = $2',[baseQuery,user_id])
//Update
exports.updateDissemination = (dissemination,id) =>db.none(pgi.helpers.update(dissemination, null, 'dissemination') + 'WHERE id = '+id)
//Delete
exports.deleteDissemination = (dissemination_id) => db.none('DELETE FROM dissemination WHERE id=($1)',[dissemination_id])



