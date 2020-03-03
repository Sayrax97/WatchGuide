"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "country",
      [
        {
          name: "Serbia"
        },
        {
          name: "Russia"
        },
        {
          name: "United States"
        },
        {
          name: "United Kingdom"
        },
        {
          name: "Spain"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("country", null, {});
  }
};
