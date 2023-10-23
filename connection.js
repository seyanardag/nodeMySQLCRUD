const mySql = require("mysql2");
const config = require("./config");

const connection = mySql.createConnection({
    host:config.db.host,
    user:config.db.username,
    password:config.db.password,
    database:config.db.db
}).promise()

module.exports = connection;