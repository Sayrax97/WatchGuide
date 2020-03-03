"use strict";
module.exports = (sequelize, DataTypes) => {
  const watchlist = sequelize.define(
    "watchlist",
    {
      user_id: DataTypes.INTEGER,
      film_id: DataTypes.INTEGER,
      watched: { type: DataTypes.BOOLEAN, default: false }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  watchlist.associate = function(models) {
    // associations can be defined here
  };
  return watchlist;
};