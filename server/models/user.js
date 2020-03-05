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
      password: DataTypes.STRING,
      country_id: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
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

    models.user.belongsToMany(models.film, {
      through: models.review,
      foreignKey: "user_id"
    });

    models.user.belongsToMany(models.film, {
      through: models.watchlist,
      foreignKey: "user_id"
    });
  };
  return user;
};
