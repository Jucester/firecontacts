const { Router } = require('express');
const route = Router();

const { addContact, index } = require('../controller/index.controller');

route.get('/', index);

// Add a new contact
route.post('/add', addContact);


module.exports = route;