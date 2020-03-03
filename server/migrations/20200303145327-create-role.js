"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("role", {
      film_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "film",
        key: "id"
      },
      actor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        model: "actor",
        key: "id"
      },
      name_charackter: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("role");
  }
};
