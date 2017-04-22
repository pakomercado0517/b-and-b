var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auditoria', function(req, res, next) {
  res.render('auditoria', {title: 'B&B Consultores'});
});

module.exports = router;