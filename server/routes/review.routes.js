module.exports = app => {
  const review = require("../controllers/review.controller.js");

  var router = require("express").Router();

  // Retrieve all geners
  router.get("/", review.findAll);

  // Insert new watchList
  router.post("/", review.insert);

  app.use("/review", router);
};
