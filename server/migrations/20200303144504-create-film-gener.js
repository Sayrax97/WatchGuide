"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("film_gener", {
      film_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "film",
        key: "id"
      },
      gener_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "gener",
        key: "id"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("film_gener");
  }
};
