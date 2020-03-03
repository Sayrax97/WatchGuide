"use strict";
module.exports = (sequelize, DataTypes) => {
  const film_gener = sequelize.define(
    "film_gener",
    {
      film_id: DataTypes.INTEGER,
      gener_id: DataTypes.INTEGER
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
