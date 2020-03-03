"use strict";
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    "role",
    {
      film_id: DataTypes.INTEGER,
      actor_id: DataTypes.INTEGER,
      name_charackter: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  role.associate = function(models) {
    // associations can be defined here
  };
  return role;
};
