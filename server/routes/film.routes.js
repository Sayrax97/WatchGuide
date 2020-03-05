module.exports = app => {
  const film = require("../controllers/film.controller.js");

  var router = require("express").Router();

  // Create a new film
  router.post("/", film.create);

  // Retrieve all films
  router.get("/", film.findAll);

  // Retrieve a single film with id
  router.get("/:id", film.findOne);

  // Update a film with id
  router.put("/:id", film.update);

  //   // Delete a Tutorial with id
  //   router.delete("/:id", film.delete);

  //   // Create a new Tutorial
  //   router.delete("/", film.deleteAll);

  app.use("/film", router);
};
