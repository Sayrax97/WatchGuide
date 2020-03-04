"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true },
      film_id: { type: DataTypes.INTEGER, primaryKey: true },
      stars: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};
