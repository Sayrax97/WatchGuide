"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("film", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      original_title: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      trailer_link: {
        type: Sequelize.STRING
      },
      cover_path: {
        type: Sequelize.STRING
      },
      parantial_quide: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("film");
  }
};
