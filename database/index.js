const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
require('dotenv').config();

const Usuario = require('../models/Usuario');
const Campanhas = require('../models/Campanhas')
const Hemocentros = require('../models/Hemocentros')
const connection = new Sequelize(dbConfig);

Usuario.init(connection)
Campanhas.init(connection)
Hemocentros.init(connection)

Campanhas.associate(connection.models)

module.exports = connection;
