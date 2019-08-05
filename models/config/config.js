require("dotenv").config();

module.exports = {
	"postgres":{
		database: process.env.DB_DATABASE,
		username: process.env.DB_USER,
		password: process.env.DB_PW,
		host: "172.16.1.173",
		dialect:'postgres'
	}
};
