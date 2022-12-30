'use strict';

// TODO Add JWT 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('todos', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      activity_group_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false
      },
      is_active:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      priority:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
      });

      await queryInterface.addConstraint('todos',{
        type: 'foreign key',
        name: 'activity_group_id_todos',
        fields:['activity_group_id'],
        references:{
          table: 'activities',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};
