var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');
var bodyParser = require('body-parser')

var userRouter = require('./routes/userRouter');

const mongoose = require('mongoose');

const Users = require('./models/user');

const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname+'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);