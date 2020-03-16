"use strict";
module.exports = (sequelize, DataTypes) => {
  const film = sequelize.define(
    "film",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      original_title: DataTypes.STRING,
      length: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      release_date: DataTypes.DATE,
      trailer_link: DataTypes.STRING,
      cover_path: DataTypes.STRING,
      parantial_quide: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  );
  film.associate = function(models) {
    //associations can be defined here
    models.film.belongsToMany(models.actor, {
      through: models.role,
      foreignKey: "film_id"
    });

    models.film.belongsToMany(models.user, {
      through: models.review,
      as: "reviews",
      foreignKey: "film"
    });

    models.film.belongsToMany(models.user, {
      through: models.watchlist,
      //as: "watchlists",
      foreignKey: "film_id"
    });

    models.film.belongsToMany(models.gener, {
      through: models.film_gener,
      foreignKey: "film_id"
    });
    // models.film.hasMany(models.role, {
    //   foreignKey: "film_id"
    // });
  };
  return film;
};
