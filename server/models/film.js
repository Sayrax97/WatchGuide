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
      timestamps: false
    }
  );
  film.associate = function(models) {
    // associations can be defined here
  };
  return film;
};
