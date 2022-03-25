'use strict';
module.exports = {
 up(queryInterface, Sequelize) {
    return queryInterface.createTable('salacinemas', {
      
      numero: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        allowNull: false,
      },
      quantidade_assentos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tem_3d: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tem_preferencial: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('salacinemas');
  }
};