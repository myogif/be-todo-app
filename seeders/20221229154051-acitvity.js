'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('activities', [
        {
          title: 'test',
          email: 'test@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'test1',
          email: 'test1@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'test2',
          email   : 'test2@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('activities', null, {});
     
  }
};
