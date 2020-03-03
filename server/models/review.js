"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      user_id: DataTypes.INTEGER,
      film_id: DataTypes.INTEGER,
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
