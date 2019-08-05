require("dotenv").config();
const pgp = require("pg-promise")();

const portNumber = process.env.DB_PORT ||  "5432" 

const connection = pgp("postgresql://"+process.env.DB_USER+":"+process.env.DB_PW+"@"+process.env.DB_HOST+":"+portNumber+"/"+process.env.DB_DATABASE);

module.exports = connection;
