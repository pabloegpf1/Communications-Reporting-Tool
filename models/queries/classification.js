const pgp = require("pg-promise")();
const db = require("../config/db-connection");

// Create
exports.addClassification = classification =>
  db.none("INSERT INTO classification (classification) VALUES ($1)", [classification]);
// Read
exports.getClassifications = () =>
  db.any(`SELECT * FROM classification`);
// Update
// Delete