const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
});

connection.connect();

exports.createPost = async (description, image_url, callback) => {
    const query =  `
    INSERT INTO posts (description, image_url)
    VALUES (?, ?)
    `
    const params = [description, image_url]

    connection.query(query, params, (error, result) => {
        if (error){
            callback(error);
            return
        }
        callback(null, result.insertId)
    })
}

exports.getPost = (callback) => {
    const query = `
        SELECT * FROM posts
    `
    connection.query(query, (error, result) => {
        if(error) {
            callback(error);
            return
        }
        callback(null, result)
    })
}

exports.deletePost = (id, callback) => {
    const query = `
    DELETE FROM posts
    WHERE id = ?
    `
    const params = [id];
    connection.query(query, params, (error, result) => {
        if(error) {
            callback(error)
            return;
        }
        callback(null, result)
    })
}