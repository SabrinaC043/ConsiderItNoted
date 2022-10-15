const express = require('express');


const notes = require('./notes');
const html = require('./html');


const app = express();

app.use('/', html);
app.use('/notes', notes);







module.exports = app;