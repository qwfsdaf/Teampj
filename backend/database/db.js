const mysql = require('mysql');

const pool = mysql.createPool({
    host: '172.30.1.87',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'capstone_db',
    connectionLimit: 5
});

function getConnection(cb) {
    pool.getConnection((err, conn) => {
        if(err) {
            console.log(err);
            return;
        }
        cb(conn);
        console.log('디비연결완')
    });
}
module.exports = getConnection;