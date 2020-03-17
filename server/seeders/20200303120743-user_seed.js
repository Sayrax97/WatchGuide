"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          full_name: "Lazar Pavlovic",
          username: "TiranrinUSenci",
          password: "94dc46df8b690f30b2d6f6f8a018b17c",
          country_id: 1,
          birthday: "1998-02-04"
        },
        {
          full_name: "Dusan Jankovic",
          username: "BSNoob",
          password: "4531091efe21b4071422f27cd015cf10",
          country_id: 1,
          birthday: "1997-06-17",
          image_path: "http://localhost:3000/img/profiles/BSNoob/profile.jpg"
        },
        {
          full_name: "John Doe ",
          username: "JDCool",
          password: "d5aa4g42g22902g24g89866a01f6fd89",
          country_id: 4,
          birthday: "1964-08-22"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  }
};
