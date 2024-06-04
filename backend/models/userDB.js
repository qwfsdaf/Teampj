import {db} from '../database/db.js';

export const Idform = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO user (user_id, user_pw, user_email, user_nickname) VALUES (?, ?, ?, ?)`, data, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
};

export const getUser = (user_id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM user WHERE user_id = ?`, [user_id], (err, result) => {
            if (err) {
                console.error('없는 회원의 아이디 입니다.', err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};