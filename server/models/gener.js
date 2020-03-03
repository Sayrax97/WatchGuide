"use strict";
module.exports = (sequelize, DataTypes) => {
  const gener = sequelize.define(
    "gener",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
