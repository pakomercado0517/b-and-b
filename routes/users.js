var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/nosotros', function(req, res, next) {
	res.render('nosotros', { title: 'B&B Consultores'})
})
router.get('/contacto', function(req, res, next) {
	res.render('contacto', { title: 'B&B Consultores'})
})
router.get('/auditoria', function(req, res, next) {
	res.render('auditoria', { title: 'B&B Consultores'})
})
router.get('/contabilidad', function(req,res,next) {
	res.render('contabilidad', { title: 'B&B Consultores'})
})

module.exports = router;
