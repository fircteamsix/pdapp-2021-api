'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'usuario',
        'status',
        {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'usuario',
        'admin',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: true,
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('usuario', 'status'),
      queryInterface.removeColumn('usuario', 'admin'),
    ])
  }
};
