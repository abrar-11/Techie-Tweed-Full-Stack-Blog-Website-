import mysql from "mysql";

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: 'cyber',
   database: "techsoft",
});


export default db


