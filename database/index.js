const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
require('dotenv').config();

const Usuario = require('../models/Usuario');
const Campanhas = require('../models/Campanhas')
const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Campanhas.init(connection)

Campanhas.associate(connection.models)

module.exports = connection;
