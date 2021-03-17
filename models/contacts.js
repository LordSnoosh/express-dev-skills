const contacts = [
    {id: 23, name: 'Rob', done: true},
    {id: 04, name: 'Dale', done: true},
    {id: 08, name: 'Nikki', done: true},
    {id: 30, name: 'Charles', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return contacts.find(contacts => contacts.id === id);
  }
  
  function getAll() {
    return contacts;
  }