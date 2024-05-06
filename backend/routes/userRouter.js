import express from 'express'
import { signup, loginCheck } from '../controllers/user.js';

const router = express.Router();

router.post('/Idform', signup);
router.post('/loginCheck', loginCheck);

export default router;