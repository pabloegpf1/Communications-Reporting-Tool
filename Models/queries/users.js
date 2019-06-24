const db = require('./index');

//Create
exports.addUser = (user) => db.none('INSERT INTO users ($1:name) VALUES ($1:list)',[user])
//Read
exports.getUsers = () => db.any('SELECT * FROM users ORDER BY admin DESC')
//Update
exports.changeStatus = (user_id) => db.none('UPDATE users SET admin = NOT admin WHERE id = $1',[user_id])
//Delete
exports.deleteUser = (user_id) => db.none('DELETE FROM users WHERE id=($1)',[user_id])




