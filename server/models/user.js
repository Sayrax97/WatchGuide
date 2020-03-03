"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      full_name: DataTypes.STRING,
      username: DataTypes.STRING,
      pasword: DataTypes.STRING,
      country_id: DataTypes.INTEGER,
      birthaday: DataTypes.DATE,
      image_path: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  );
  user.associate = function(models) {
    // associations can be defined here
    models.user.belongsTo(models.country);
  };
  return user;
};
