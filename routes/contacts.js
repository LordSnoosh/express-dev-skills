var express = require('express');
var router = express.Router();
var contactsCtrl = require('../controllers/contacts');



/* GET /skills     --- "index" action/functionality */
router.get('/', contactsCtrl.index);
// GET /skills/:id
router.get('/:id', contactsCtrl.show);

module.exports = router;
