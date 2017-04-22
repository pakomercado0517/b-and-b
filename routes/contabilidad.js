var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contabilidad', function(req, res, next) {
  res.render('contabilidad', {title: 'B&B Consultores'});
});

module.exports = router;