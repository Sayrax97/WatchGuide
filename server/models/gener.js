"use strict";
module.exports = (sequelize, DataTypes) => {
  const gener = sequelize.define(
    "gener",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  gener.associate = function(models) {
    // associations can be defined here
  };
  return gener;
};
