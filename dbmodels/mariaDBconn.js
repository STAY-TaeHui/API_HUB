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

const getUserList = async (req,res) =>{
  let conn, rows;
  try {
    conn = await pool.getConnection();
    console.log("--------------------------------CONNECTION SUCCEES----------------------------------")
  }
  catch (err) { 
    console.log("CONNECTION FAILE");
    throw err; 
  }
  finally {
    if (conn) conn.end();
    
  }
}

module.exports = { getUserList, }