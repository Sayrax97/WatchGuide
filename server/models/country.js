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
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  country.associate = function(models) {
    // associations can be defined here
    models.country.hasMany(models.user, {
      foreignKey: "country_id"
    });
  };
  return country;
};
