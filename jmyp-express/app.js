var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

global.$dirname = __dirname;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/backstageRouter/backstage-user');
var loginRouter = require('./routes/backstageRouter/backstage-login');


/******************************************************平台端商城接口****************************************************************************/
let selectType = require('./routes/backstageRouter/goods/select-type')
let goodsAdd = require('./routes/backstageRouter/goods/goods-add')

/******************************************************app商城接口****************************************************************************/
let appRegsRouter = require('./routes/appRouter/app-login/login-reg')
let appLogin = require('./routes/appRouter/app-login/login-log')
let appSelect = require('./routes/appRouter/app-goods/goods-select')
let appDatails = require('./routes/appRouter/app-goods/goods-datails')
let setShopping = require('./routes/appRouter/app-goods/goods-setShopping')
let getShopping = require('./routes/appRouter/app-goods/goods-getShopping')
let deleteShopping = require('./routes/appRouter/app-goods/goods-deleteShopping')
let search = require('./routes/appRouter/app-search/search')
let setOrder = require('./routes/appRouter/app-order/order-setOrder')
let getOrder = require('./routes/appRouter/app-order/order-getOrder')
let liulaobanzhuanshuSearch = require('./routes/appRouter/app-search/liulaobanzhuanshu-search')



let upload = require('./routes/backstageRouter/upload')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))
app.set('view engine', 'jade');

app.use(cors())
app.use('/uploads', express.static('./uploads')) //上传图片的静态资源

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

/******************************************************app商城接口****************************************************************************/
app.use('/appRegs',appRegsRouter)
app.use('/appLogin',appLogin)
app.use('/appSelect',appSelect)
app.use('/appDatails',appDatails)
app.use('/setShopping',setShopping)
app.use('/getShopping',getShopping)
app.use('/deleteShopping',deleteShopping)
app.use('/search',search)
app.use('/setOrder',setOrder)
app.use('/getOrder',getOrder)
app.use('/liulaobanzhuanshuSearch',liulaobanzhuanshuSearch)

/******************************************************平台端商城接口****************************************************************************/

app.use('/selectType',selectType)
app.use('/goodsAdd',goodsAdd)



app.use('/upload',upload)

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
