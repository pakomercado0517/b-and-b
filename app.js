var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer= require('nodemailer')



var index = require('./routes/index');
// var nosotros = require('./routes/nosotros');
// var contacto = require('./routes/contacto');
// var contabilidad= require('./routes/contabilidad')
// var auditoria= require('./routes/auditoria')
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'config')));
app.use(express.static(path.join(__dirname, 'routes')))


app.use('/', index);
app.post('/mailing', function(req, res) {
	let transporter= nodemailer.createTransport({
	    host: 'smtp.zoho.com',
	    port: 465,
	    secure: true,
	    auth: {
	    	user:'admin@b-and-bconsultores.com.mx',
	    	pass: 'Chisqueado251785'
	    } 
	})

	let mailOptions= {
	  from: 'admin@b-and-bconsultores.com.mx',
	  to: 'meza.alf@b-and-bconsultores.com.mx, admin@b-and-bconsultores.com.mx',
	  subject: 'Mensaje de www.b-and-bconsultores.com.mx',
	  text: req.body.message,
	  html: `<p>De: ${req.body.name}</p><br><p>Correo: ${req.body.mail}</p><br><p>Teléfono: ${req.body.number}</p><br><p>Mensaje: ${req.body.message}</p>`
	}

	transporter.sendMail(mailOptions, (error, info) => {
	  if(error) {
	    return console.log(error)
	  }
	  console.log('Mensaje enviado con éxito' + info)
	})
	res.redirect('/contact')
})

// app.use('/nosotros', nosotros);
// app.use('/contacto', contacto);
// app.use('/contabilidad', contabilidad);
// app.use('/auditoria', auditoria);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
