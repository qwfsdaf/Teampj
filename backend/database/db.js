import mysql from 'mysql'

const db = mysql.createPool({
    host: '192.168.226.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'capstone_db',
    connectionLimit: 5
});

function getConnection(cb) {
    db.getConnection((err, conn) => {
        if (err) {
            console.log(err); // 연결 실패 시 오류 로그 출력
            return;
        }
        cb(conn);
        console.log('디비연결완'); // 연결 성공 시 로그 출력
    });
}

export default getConnection;
export { db };