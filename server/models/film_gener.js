"use strict";
module.exports = (sequelize, DataTypes) => {
  const film_gener = sequelize.define(
    "film_gener",
    {
      film_id: { type: DataTypes.INTEGER, primaryKey: true },
      gener_id: { type: DataTypes.INTEGER, primaryKey: true }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  film_gener.associate = function(models) {
    // associations can be defined here
  };
  return film_gener;
};
