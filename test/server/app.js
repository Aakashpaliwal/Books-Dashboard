var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var bodyParser   = require('body-parser');
var session = require('express-session');
var empty = require('is-empty');

// var fileUpload = require('express-fileupload');
// var dateTime = require('node-datetime');
// var expressSanitized = require('express-sanitize-escape');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(session({ secret: 'supersecretkey',resave: true, saveUninitialized: true ,cookie: { maxAge:60000, }}));
// app.use(fileUpload());
// app.use(expressSanitized());

var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var profile = require('./routes/profile/profile.js');
app.use('/profile', profile);

var admin = require('./routes/admin/admin.js');
app.use('/admin', admin);

var employe = require('./routes/employe/employe.js');
app.use('/employe', employe);

var zone = require('./routes/zone/zone.js');
app.use('/zone', zone);

var myequipment = require('./routes/myequipment/myequipment.js');
app.use('/myequipment', myequipment);

var customer = require('./routes/customer/customer.js');
app.use('/customer', customer);

var category = require('./routes/category/category.js');
app.use('/category', category);

var site = require('./routes/site/site.js');
app.use('/site', site);

var complaint = require('./routes/complaint/complaint.js');
app.use('/complaint',complaint);

var invoice = require('./routes/invoice/invoice.js');
app.use('/invoice',invoice);

var list = require('./routes/list/list.js');
app.use('/list',list);

var location_supervisor = require('./routes/location_supervisor/location_supervisor.js');
app.use('/location_supervisor',location_supervisor);

var proposal = require('./routes/proposal/proposal.js');
app.use('/proposal',proposal);

var equipment = require('./routes/equipment/equipment.js');
app.use('/equipment',equipment);

var schedule = require('./routes/schedule/schedule.js');
app.use('/schedule',schedule);

var location = require('./routes/location/location.js');
app.use('/location',location);

var amc = require('./routes/amc/amc.js');
app.use('/amc',amc);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
