"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "watchlist",
      [
        {
          user_id: 1,
          film_id: 4,
          watched: false
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("watchlist", null, {});
  }
};
