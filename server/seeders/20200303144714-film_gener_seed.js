"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "film_gener",
      [
        {
          film_id: 1,
          gener_id: 2
        },
        {
          film_id: 1,
          gener_id: 3
        },
        {
          film_id: 1,
          gener_id: 6
        },
        {
          film_id: 1,
          gener_id: 7
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("film_gener", null, {});
  }
};
