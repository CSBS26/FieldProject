require("dotenv").config();
const mysql = require("mysql2");

const urlDB = 'mysql://root:WJhPdhLolEObeVUuhewLNmpSrEfNeHNU@viaduct.proxy.rlwy.net:13789/railway';

const connection = mysql.createConnection(urlDB);

module.exports = connection;
