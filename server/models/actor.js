"use strict";
module.exports = (sequelize, DataTypes) => {
  const actor = sequelize.define(
    "actor",
    {
      id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      birthaday: DataTypes.DATE,
      description: DataTypes.STRING,
      imdb_link: DataTypes.STRING,
      wikipedia_link: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  actor.associate = function(models) {
    // associations can be defined here
  };
  return actor;
};
