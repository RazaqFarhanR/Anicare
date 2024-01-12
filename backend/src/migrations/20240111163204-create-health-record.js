'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HealthRecord', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      animalId: {
        type: Sequelize.UUID,
        references: {
          model: 'animal',
          key: 'id'
        }
      },
      visit_date: {
        type: Sequelize.DATE
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      treatment: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('HealthRecord');
  }
};