'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:false,
        primaryKey: true
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }

      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
