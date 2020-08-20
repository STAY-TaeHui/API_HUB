var mariadb = require('mariadb');
const pool = mariadb.createPool(
  {
    database:process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    timezone: process.env.DB_TIMEZONE,
    connectionLimit: 1
  }
);

const createConnection = async (req,res) =>{
  let conn, rows;
  try {
    conn = await pool.getConnection(); //DB연결
    console.log("--------------------------------CONNECTION SUCCEES----------------------------------")
  }
  catch (err) { 
    console.log("CONNECTION FAILE");
    throw err; 
  }
  // finally {
  //   if (conn) conn.end();//DB연결 해제
  //   console.log("--------------------------------CONNECTION END----------------------------------")

    
  // }
}

module.exports = { createConnection }