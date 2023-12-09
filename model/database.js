const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    // waitForConnections: true,

    // connectionLimit: 10,
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    // queueLimit: 0,
    // enableKeepAlive: true,
    // keepAliveInitialDelay: 0
  }).promise();

  //if error in connection display error message
  pool.getConnection((err) => {
    if(err){
        throw err;
    } 

})



  exports.createPost = async (description, image_url, callback) => {
    await pool.query(`
    INSERT INTO posts (description, image_url)
    VALUES (?, ?)
    `, [description, image_url], (err, rows) => {
        // Connection is automatically released when query resolves
        if(err) {
            callback(err);
        }
        // console.log(rows[0]);
        callback(null, rows.insertId);
        console.log(rows);
      });
  }

  exports.getPost = () => {
    
  }