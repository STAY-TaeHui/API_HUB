var mariadb = require('mariadb');
const pool = mariadb.createPool(
  {
    database:process.env.TESTDB_DATABASE,
    host: process.env.TESTDB_HOST,
    port: process.env.TESTDB_PORT,
    user: process.env.TESTDB_USER,
    password: process.env.TESTDB_PASSWORD,
    connectionLimit: 1
  }
);

const getUserList = async (req,res) =>{
  let conn, rows;
  try {
    conn = await pool.getConnection();
    console.log("--------------------------------CONNECTION SUCCEES----------------------------------")
    //  conn.query('mysql'); // 사용할 DB 명시
    rows = await conn.query('SELECT * FROM db'); // 쿼리 실행
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