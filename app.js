const express = require('express');
const cookieParser = require('cookie-parser');
const log4js = require('log4js');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database');

const passwordHasher = require('./middleware/password-hasher');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passwordHasher);
app.use(log4js.connectLogger(log4js.getLogger('http'), {level: 'auto'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/users', usersRouter);

module.exports = app;
