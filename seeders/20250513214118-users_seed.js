'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      username: 'John Doe',
      email: "jondoe@mail.com",
      password: '$2y$10$4MiRj4EvteNInMNEJPpDZuHDUybxcg8CxRPANQcsUIthUvmfQay9a',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: 'Jane Doe',
      email: "janedoe@mail.com",
      password: '$2y$10$4MiRj4EvteNInMNEJPpDZuHDUybxcg8CxRPANQcsUIthUvmfQay9a',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: 'Alice Smith',
      email: "alicesmit@mail.com",
      password: '$2y$10$4MiRj4EvteNInMNEJPpDZuHDUybxcg8CxRPANQcsUIthUvmfQay9a',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
