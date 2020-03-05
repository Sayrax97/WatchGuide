"use strict";
module.exports = (sequelize, DataTypes) => {
  const actor = sequelize.define(
    "actor",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      full_name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      description: DataTypes.STRING,
      imdb_link: DataTypes.STRING,
      wikipedia_link: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  );
  actor.associate = function(models) {
    //associations can be defined here
    models.actor.belongsToMany(models.film, {
      through: models.role,
      foreignKey: "actor_id"
    });
    // models.actor.hasMany(models.role, {
    //   foreignKey: "actor_id"
    // });
  };
  return actor;
};
