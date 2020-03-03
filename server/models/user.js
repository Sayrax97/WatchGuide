"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      username: DataTypes.STRING,
      pasword: DataTypes.STRING,
      country_code: DataTypes.INTEGER,
      birthaday: DataTypes.DATE,
      image_path: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
