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
      full_name: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      country_id: { type: DataTypes.INTEGER, allowNull: false },
      birthday: { type: DataTypes.DATE, allowNull: false },
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
      as: "reviews",
      foreignKey: "user"
    });

    models.user.belongsToMany(models.film, {
      through: models.watchlist,
      //as: "watchlists",
      foreignKey: "user_id"
    });
  };
  return user;
};
