let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    port: 3306

});

connection.connect();

module.exports = connection;