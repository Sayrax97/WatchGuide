module.exports = app => {
  const actor = require("../controllers/actor.controller.js");

  var router = require("express").Router();

  // Create a new actor
  router.post("/", actor.create);

  // Retrieve all actors
  router.get("/", actor.findAll);

  // Retrieve a single actor with id
  router.get("/:id", actor.findOne);

  // Update a actor with id
  router.put("/:id", actor.update);

  //   // Delete a Tutorial with id
  //   router.delete("/:id", actor.delete);

  //   // Create a new Tutorial
  //   router.delete("/", actor.deleteAll);

  app.use("/actor", router);
};
