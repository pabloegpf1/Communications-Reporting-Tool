const db = require('./index');
const pgp = require('pg-promise')();

const items = {
    async getAllItems(){
        return db.any('SELECT * FROM items')
     }
}

module.exports = items;