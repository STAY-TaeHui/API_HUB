var mariadb = require('mariadb');
var config = require('../dbconfig');

const pool = mariadb.createPool(
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5
  }
);

const getUserList = async (req,res) =>{
  let conn, rows;
  try {
    conn = await pool.getConnection();
   
     
     
      console.log("CONNECTION SUCCEES")
   
    // conn.query('USE HOSEO_BUS2'); // 사용할 DB 명시
    //rows = await conn.query('SELECT * FROM admin'); // 쿼리 실행
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