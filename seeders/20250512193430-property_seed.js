'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Property', [{
      name: 'Property 1',
      description: 'Description for Property 1',
      price: 100000,
      image_url: 'https://example.com/property1.jpg',
      location: 'Location 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Property', [{
      name: 'Property 2',
      description: 'Description for Property 2',
      price: 100000,
      location: 'Location 2',
      image_url: 'https://example.com/property3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Property', [{
      name: 'Property 3',
      description: 'Description for Property 3',
      price: 100000,
      location: 'Location 3',
      image_url: 'https://example.com/property2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Property', null, {});
  }
};
