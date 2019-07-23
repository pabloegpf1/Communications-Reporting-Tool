const pgp = require("pg-promise")();
const db = require("./db-connection");

//Create
exports.addDissemination = dissemination =>
  db.none("INSERT INTO dissemination ($1:name) VALUES ($1:list)", [
    dissemination
  ]);
//Read
exports.getDisseminations = () =>
  db.any(
    `SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination d ORDER BY id DESC`
  );
exports.getDisseminationById = id =>
  db.one(
    `SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination d WHERE id = $1`,
    [id]
  );
exports.searchDissemination = string =>
  db.any(
    `SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination WHERE unaccent(summary) ILIKE unaccent('%$1:value%') ORDER BY date DESC`,
    [string]
  );
exports.getDisseminationsByUser = user_id =>
  db.any(
    "SELECT id, headline, summary, date, added_by, pr_news, url FROM dissemination WHERE added_by = $1",
    [user_id]
  );
//Update
exports.updateDissemination = (dissemination, id) => {
  let query = pgp.as.format(
    pgp.helpers.update(dissemination, null, "dissemination") +
      "WHERE id = " +
      id
  );
  console.log(query);
  return db.none(query);
};

//Delete
exports.deleteDissemination = dissemination_id =>
  db.none("DELETE FROM dissemination WHERE id=($1)", [dissemination_id]);
