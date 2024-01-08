const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/user.controller');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/user', route);
app.use((er, req, res, _next) => res.send(er.message));

module.exports = app;