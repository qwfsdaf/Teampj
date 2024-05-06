import bcrypt from 'bcrypt';
import { Idform } from '../models/userDB.js';

// 회원가입
const textToHash = async (text) => {
    const saltRounds = 10;

    try {
        const hash = await bcrypt.hash(text, saltRounds);
        return hash;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const signup = async (req, res) => {
    const { userID, userPW } = req.body;

    try {
        const user = await Idform(userID);
        if (user) {
            res.status(401).json('이미 존재하는 아이디입니다.');
            return;
        }

        const hash = await textToHash(userPW);
        await Idform([userID, hash]);
        res.status(200).json('회원가입 완료');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

// 로그인
const hashCompare = async (inputValue, hash) => {
    try {
        const isMatch = await bcrypt.compare(inputValue, hash);
        return isMatch;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const loginCheck = async (req, res) => {
    const { userID, userPW } = req.body;

    try {
        const user = await Idform(userID);
        if (!user) {
            res.status(401).json('존재하지 않는 아이디입니다.');
            return;
        }

        const hash = user.userPW;
        const isMatch = await hashCompare(userPW, hash);

        if (!isMatch) {
            res.status(401).json('비밀번호가 일치하지 않습니다.');
            return;
        }
        res.status(200).json('로그인 성공');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};