const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();

// Settings
app.set('PORT', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',

}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;