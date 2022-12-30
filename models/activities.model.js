
module.exports = (sequelize, DataTypes) => {
  const activities = sequelize.define('activities', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'activities'
  });

  // Relation
  activities.associate = (models) => {
    activities.hasMany(models.todos,{foreignKey: "activity_group_id",});
};

  return activities;
}