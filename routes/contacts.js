var express = require('express');
var router = express.Router();

/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
