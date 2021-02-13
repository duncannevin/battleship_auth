const express = require('express');
const cookieParser = require('cookie-parser');
const log4js = require('log4js');

const cors = require('./middleware/cors');
const authRouter = require('./routes/auth');

const db = require('./database/connect');
db.testConnection();

const app = express();

app.use(cors);
app.use(log4js.connectLogger(log4js.getLogger('http'), {level: 'auto'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/auth', authRouter);

module.exports = app;
