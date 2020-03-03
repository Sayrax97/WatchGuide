"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "gener",
      [
        {
          name: "Absurdist"
        },
        {
          name: "Action"
        },
        {
          name: "Adventure"
        },
        {
          name: "Comedy"
        },
        {
          name: "Crime"
        },
        {
          name: "Drama"
        },
        {
          name: "Fantasy"
        },
        {
          name: "Historical"
        },
        {
          name: "Horror"
        },
        {
          name: "Mystery"
        },
        {
          name: "Philosophical"
        },
        {
          name: "Political"
        },
        {
          name: "Romance"
        },
        {
          name: "Saga"
        },
        {
          name: "Satire"
        },
        {
          name: "Science fiction"
        },
        {
          name: "Social"
        },
        {
          name: "Speculative"
        },
        {
          name: "Thriller"
        },
        {
          name: "Western"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("gener", null, {});
  }
};
