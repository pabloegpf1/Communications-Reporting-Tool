require("dotenv").config();

const pgp = require("pg-promise")({
    error: function (error, e) {
        if (e.cn) {
            console.log("CONNECTION:", e.cn);
        }
    }
});

const connection = pgp({
    "host": process.env.DB_HOST,
    "port": portNumber = process.env.DB_PORT ||  "5432",
    "password": process.env.DB_PW,
    "database": process.env.DB_DATABASE,
    "user": process.env.DB_USER
  });

connection.connect()
    .then(function (obj) {
        obj.done(); 
    })
    .catch(function (error) {
        console.log("ERROR:", error.message);
    });

module.exports = connection;
