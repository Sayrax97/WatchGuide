"use strict";
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    "role",
    {
      film_id: { type: DataTypes.INTEGER, primaryKey: true },
      actor_id: { type: DataTypes.INTEGER, primaryKey: true },
      name_charackter: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  role.associate = function(models) {
    // associations can be defined here
    // models.role.belongsTo(models.actor);
    // models.role.belongsTo(models.film);
  };
  return role;
};
