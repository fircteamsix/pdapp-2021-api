'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('campanhas', {
      id_campanha: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo_paciente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_termino: {
        type: Sequelize.STRING,
        allowNull: false
      },
      local_doacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_sanguineo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cd_usuario: {
        type: Sequelize.INTEGER,
        references: { model: 'usuario', key: 'cd_usuario' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull:true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campanhas');
  }
};
