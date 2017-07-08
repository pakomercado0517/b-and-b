var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index')
  // res.render('index', { title: 'B&B Consultores' });
});
router.get('/services', function(req,res,next) {
	res.render('services')
})
router.get('/contact', function(req, res, next) {
	res.render('contacto')
})


module.exports = router;
