"use strict";
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};
