const db = require("./db-connection");
const pgp = require("pg-promise")();

//Create
exports.addUser = user =>
  db.none("INSERT INTO users ($1:name) VALUES ($1:list)", [user]);
  
//Read
exports.getUsers = () => db.any("SELECT * FROM users ORDER BY admin DESC");
exports.getUserById = user_id =>
db.one("SELECT * FROM users WHERE id = $1", [user_id]);
exports.getUserByUsername = username =>
  db.one("SELECT * FROM users WHERE username = $1", [username]);

//Update
exports.changeStatus = user_id =>
  db.none("UPDATE users SET admin = NOT admin WHERE id = $1", [user_id]);
exports.editUser = (user, id) =>
  db.none(pgp.helpers.update(user, null, "users") + "WHERE id = " + id);

//Delete
exports.deleteUser = user_id =>
  db.none("DELETE FROM users WHERE id=($1)", [user_id]);
