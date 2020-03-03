"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          full_name: "Lazar Pavlovic",
          username: "TiranrinUSenci",
          pasword: "b1c3255c4c28cb0ab8b0e5a987a379ea",
          country_code: 1,
          birthaday: "1998-02-04"
        },
        {
          full_name: "Dusan Jankovic",
          username: "BSNoob",
          pasword: "d5aa4b1632902ea96f89866a01f6fd89",
          country_code: 1,
          birthaday: "1997-06-17"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  }
};
