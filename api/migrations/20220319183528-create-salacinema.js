'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salacinemas', {
      
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salacinemas');
  }
};