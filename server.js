const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
//const { parentPort } = require('worker_threads');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

const loginRouter = require('./routes/login');
app.use('/hogwarts/main', loginRouter);

const joinRouter = require('./routes/join');
app.use('/hogwarts/join', joinRouter);

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/src', express.static(__dirname + '/src'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');

app.listen(port, () => {
    console.log(`서버 실행 포트번호 ${port}`);
});