import bcrypt from 'bcrypt';
import { Idform, getUser } from '../models/userDB.js'; // DB 모델 함수

// 회원가입 로직
export async function signup(req, res) {

    const { user_id, user_pw, user_email, user_nickname } = req.body;
    try {
        const existingUser = await getUser(user_id);
        if (existingUser.length > 0) {
            return res.status(409).send('User already exists');
        }
        const hashedPassword = await bcrypt.hash(user_pw, 10);
        await Idform([user_id, hashedPassword, user_email, user_nickname]);
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).send('Server error');
    }
}

// 로그인 로직
export async function loginCheck(req, res) {
    const { user_id, user_pw } = req.body;

    try {
        const [user] = await getUser(user_id);
        if (!user) {
            res.status(401).json({ message: '존재하지 않는 아이디입니다.' });
            return;
        }

        const isMatch = await bcrypt.compare(user_pw, user.user_pw);
        if (!isMatch) {
            res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
            return;
        }
        res.status(200).json({ message: '로그인 성공', user: { user_id } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '서버 오류' });
    }
}
