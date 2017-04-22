var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', {title: 'B&B Consultores'});
});

module.exports = router;