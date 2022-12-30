
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    activity_group_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    is_active:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    priority:{
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt:{
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt:{
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    tableName: 'todos'
  });

  // Relation
  todos.associate = (models) => {
    todos.hasMany(models.todos,{foreignKey: "activity_group_id",});
};

  return todos;
}