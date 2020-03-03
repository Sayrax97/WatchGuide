"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "review",
      [
        {
          user_id: 1,
          film_id: 1,
          stars: 5
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("review", null, {});
  }
};
