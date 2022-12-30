'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('todos', [
        {
          activity_group_id: 1,
          title: 'Backend',
          is_active: true,
          priority: 'high',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          activity_group_id: 2,
          title: 'Frontend',
          is_active: false,
          priority: 'high',
          created_at: new Date(),
          updated_at: new Date(),
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('todos', null, {});
     
  }
};
