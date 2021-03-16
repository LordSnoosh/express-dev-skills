const contacts = [
    {id: 125223, name: 'JavaScript', done: true},
    {id: 127904, name: 'HTML', done: true},
    {id: 139608, name: 'Node', done: true},
    {id: 221430, name: 'CSS', done: true}
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