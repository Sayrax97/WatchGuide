module.exports = app => {
  const review = require("../controllers/review.controller.js");

  var router = require("express").Router();

  // Retrieve a specific review
  router.get("/:user/:film", review.findOne);

  // Insert new watchList
  router.post("/", review.insert);

  app.use("/review", router);
};
