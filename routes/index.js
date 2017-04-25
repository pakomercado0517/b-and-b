var express = require('express');
var router = express.Router();

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
router.post('/contacto', function(req,res) {
	let form= submitSuccess()

	let db= firebase.database()

	let formInputs= db.ref('form-submit').push
	 formInputs.set({
		name: name,
		phone: phone,
		email: email,
		message: message
	})

	res.send(req.body.form)
})
router.get('/contabilidad', function(req, res) {
	res.render('contabilidad')
})
router.get('/auditoria', function(req, res) {
	res.render('auditoria')
})


module.exports = router;
