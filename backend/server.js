const express = require('express');
const cors = require("cors");


//const bodyParser = require('body-parser');
//const path = require('path');
// const { renderFile } = require('ejs');
//const nunjucks = require('nunjucks');
//const { parentPort } = require('worker_threads');

const db = require('./userDB');

const app = express();
const port = 3000;

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


// 라우터 설정
const userRouter = require('./backend/routes/userRouter');
app.use('/api', loginRouter); 

// 쿠키 파서 설정
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 정적 파일 경로 설정
app.use('/src', express.static(path.join(__dirname, 'src')));

// 뷰 엔진 설정
app.engine('jsx', renderFile);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views'));

// 데이터베이스 설정
app.get('/', (req, res) => {
    db.query('SELECT * FROM *', function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`서버 실행 포트번호 ${port}`);
});
