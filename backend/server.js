import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import getConnection from './database/db.js';
import userRouter from './routes/userRouter.js';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const port = 3001;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api', userRouter);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = req.file.path;
        const image = fs.readFileSync(imagePath);
        const base64Image = Buffer.from(image).toString('base64');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        };

        const payload = {
            model: "gpt-4o",
            messages: [{
                role: "user",
                content: [
                    { type: "text", text: "이 이미지에 1. 빨래 방법, 2. 다리미질 가능여부, 3. 건조 방법만 알려줘" },
                    { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
                ]
            }],
            max_tokens: 100,
            temperature: 0.3,
            top_p: 1
        };

        const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
        let description = response.data.choices[0].message.content;

        description = description.replace(/\n/g, ' ').replace(/-/g, '');
        res.json({ description });
    } catch (error) {
        console.error(error);
        res.status(500).send('오류가 발생했습니다');
    }
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다`);
    getConnection((conn) => {
        conn.release();
    });
});
