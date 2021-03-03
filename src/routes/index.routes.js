const { Router } = require('express');
const route = Router();

const { addContact, index, deleteContact } = require('../controller/index.controller');

route.get('/', index);

// Add a new contact
route.post('/add', addContact);

// Delete
route.get('/delete/:id', deleteContact);


module.exports = route;