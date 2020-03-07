"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "actor",
      [
        {
          full_name: "Bata Zivojinovic",
          birthday: "1933-06-05",
          description: "Srbin, COVEK",
          imdb_link:
            "https://www.imdb.com/find?q=bata+zivojinovic&ref_=nv_sr_sm",
          wikipedia_link:
            "https://en.wikipedia.org/wiki/Bata_%C5%BDivojinovi%C4%87",
          image_url: "http://localhost:3000/img/actors/1/actor.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("actor", null, {});
  }
};
