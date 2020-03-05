module.exports = app => {
  const gener = require("../controllers/gener.controller.js");

  var router = require("express").Router();

  // Retrieve all geners
  router.get("/", gener.findAll);

  // // Retrieve a single gener with id
  // router.get("/:id", gener.findOne);

  app.use("/gener", router);
};
