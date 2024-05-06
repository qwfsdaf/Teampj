import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'
import { db } from './database/db.js'

const port = 3001;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 라우터 설정
import userRouter from './routes/userRouter.js'
app.use('/api', userRouter); 

// 정적 리소스 제공
app.use(express.static(path.join(__dirname, '../src')));

// 모든 경로에 대해 index.html을 제공
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});