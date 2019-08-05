const pgp = require("pg-promise")();
const db = require("../config/db-connection");

// Create
// Read
exports.getClassifications = () =>
  db.any(`SELECT * FROM classification`);
// Update
// Delete