const db = require('../database/db');

exports.Idform = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO user (userID, userPW) VALUES (?, ?) `, [data[0], data[1]], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.getUser = (userID) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM user where userID = ?`, userID, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

