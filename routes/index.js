var express = require('express');
var router = express.Router();
var mail= require('../public/js/mail.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'B&B Consultores' });
});
router.get('/nosotros', function(req, res) {
	res.render('nosotros')
	next()
})
router.get('/contacto', function(req, res) {
	res.render('contacto')
})
router.post('/js/mail.js', function(req,res) {

	mail.sendMail({
		from: {name, email}, 
		to: 'fgme.facturacion@b-and-bconsultores.com.mx',
		subject: phone,
		text: message
	})



	// let form= submitSuccess()

	// let db= firebase.database()

	// let formInputs= db.ref('form-submit').push
	//  formInputs.set({
	// 	name: name,
	// 	phone: phone,
	// 	email: email,
	// 	message: message
	// })

	// res.send(req.body.form)
})
router.get('/contabilidad', function(req, res) {
	res.render('contabilidad')
})
router.get('/auditoria', function(req, res) {
	res.render('auditoria')
})


module.exports = router;
