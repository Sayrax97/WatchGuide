"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("review", {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "user",
        key: "id"
      },
      film_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "film",
        key: "id"
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("review");
  }
};
