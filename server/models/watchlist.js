"use strict";
module.exports = (sequelize, DataTypes) => {
  const watchlist = sequelize.define(
    "watchlist",
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true },
      film_id: { type: DataTypes.INTEGER, primaryKey: true },
      watched: { type: DataTypes.BOOLEAN, defaultValue: false }
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
