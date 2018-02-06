const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const error = require('./helper/errorHandler');
const authHelper = require('./helper/authHelper');

// router
const index = require('./routes');
const member = require('./routes/member/');
const comment = require('./routes/comment/');
const siteStatistic = require('./routes/site_statistic/');
const session = require('./routes/session/');
const cart = require('./routes/cart/');
const club = require('./routes/club/');
const auth = require('./routes/auth/');
const sns = require('./routes/sns/');
const category = require('./routes/category/');
const tag = require('./routes/tag/');
const career = require('./routes/career/');
const blacklist = require('./routes/blacklist/');

// app
const app = express();

// cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// images setup
app.set('images', path.join(__dirname, 'images'));

// use static
app.use(express.static('views'));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

// router load
// auth 인증 시 authHelper.ensureAuthorized 추가
app.use('/', index);
app.use('/images', express.static('images'));
app.use('/member', member);
app.use('/comment', comment);
app.use('/site-statistic', siteStatistic);
app.use('/session', session);
app.use('/cart', cart);
app.use('/club', club);
app.use('/auth', auth);
app.use('/tag', tag);
app.use('/category', category);
app.use('/sns', sns);
app.use('/career', career);
app.use('/blacklist', blacklist);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = error(404);
  next(err);
});

// error send handler
app.use(function(err, req, res, next) {
  let errors = err.status ? error(err.status) : error(err.status, err);

  // send json
  res.status(errors.status).json(errors);
});

module.exports = app;
