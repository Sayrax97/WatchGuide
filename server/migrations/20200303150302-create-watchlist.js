"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("watchlist", {
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
      watched: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("watchlist");
  }
};
