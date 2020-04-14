const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-soccer-api'
});

conn.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('MySQL Connected OK.');
});

module.exports = conn;
