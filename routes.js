const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuario')
app.use('/usuario', rotaUsuario);


module.exports = app;