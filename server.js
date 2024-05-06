const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { renderFile } = require('ejs');
//const nunjucks = require('nunjucks');
//const { parentPort } = require('worker_threads');

const app = express();
const port = 3000;

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 설정
const loginRouter = require('./routes/login');
app.use('sero/login', loginRouter);

// 쿠키 파서 설정
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 정적 파일 경로 설정
app.use('/src', express.static(path.join(__dirname, 'src')));

// 뷰 엔진 설정
app.engine('jsx', renderFile);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`서버 실행 포트번호 ${port}`);
});