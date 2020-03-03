"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pasword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        model: "country",
        key: "id"
      },
      birthaday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      image_path: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  }
};
