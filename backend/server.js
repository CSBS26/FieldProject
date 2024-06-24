require("dotenv").config();
const mysql = require("mysql2");

const urlDB = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`;

const connection = mysql.createConnection(urlDB);

module.exports = connection;
