require("dotenv").config();

module.exports = {
	"development": {
		database: process.env.DB_DATABASE,
		username: process.env.DB_USER,
		password: process.env.DB_PW,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect:'postgres'
	  },
	  "production": {
		database: process.env.DB_DATABASE,
		username: process.env.DB_USER,
		password: process.env.DB_PW,
		host: process.env.HOST,
		port: process.env.DB_PORT,
		dialect:'postgres'
	  }
};
