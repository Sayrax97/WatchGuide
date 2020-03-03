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
          country_id: 1,
          birthaday: "1998-02-04"
        },
        {
          full_name: "Dusan Jankovic",
          username: "BSNoob",
          pasword: "d5aa4b1632902ea96f89866a01f6fd89",
          country_id: 1,
          birthaday: "1997-06-17"
        },
        {
          full_name: "John Doe ",
          username: "JDCool",
          pasword: "d5aa4g42g22902g24g89866a01f6fd89",
          country_id: 4,
          birthaday: "1964-08-22"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  }
};
