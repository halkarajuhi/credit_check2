const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "51.79.140.122", // HOST NAME
    user: "credo", // USER NAME
    database: "db_credo", // DATABASE NAME
    password: "TrxTrx@88", // DATABASE PASSWORD
    port:"83"
    
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
