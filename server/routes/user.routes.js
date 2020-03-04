module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", user.create);

  // Retrieve all users
  router.get("/", user.findAll);

  // Retrieve a single user with id
  router.get("/:id", user.findOne);

  // Update a User with id
  router.put("/:id", user.update);

  //   // Delete a Tutorial with id
  //   router.delete("/:id", user.delete);

  //   // Create a new Tutorial
  //   router.delete("/", user.deleteAll);

  app.use("/user", router);
};
