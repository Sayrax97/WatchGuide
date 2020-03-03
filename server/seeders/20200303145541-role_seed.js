"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "role",
      [
        {
          film_id: 4,
          actor_id: 1,
          name_charackter: "Walter"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("role", null, {});
  }
};
