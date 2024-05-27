import express from 'express';
import { signup, loginCheck } from '../controllers/user.js';

const router = express.Router();

router.post('/signup', signup);      // 회원가입 라우트
router.post('/login', loginCheck);  // 로그인 라우트

export default router;

