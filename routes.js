const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuario')
app.use('/usuario', rotaUsuario);

const rotaTermo = require('./routes/termodeuso')
app.use('/termo', rotaTermo)

const rotaCampanha = require('./routes/campanhas')
app.use('/campanhas', rotaCampanha)

module.exports = app;