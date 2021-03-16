const Contact = require('../models/contacts');

module.exports = {
  index,
  show
};

function show(req, res) {
  res.render('contacts/show', {
    contact: Contact.getOne(req.params.id)
  });
}

function index(req, res) {
  res.render('contacts/index', {
    contact: Contact.getAll()
  });
}