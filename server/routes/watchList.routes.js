module.exports = app => {
  const watchlist = require("../controllers/watchList.controller.js");

  var router = require("express").Router();

  // Retrieve all geners
  router.get("/", watchlist.findAll);

  // Insert new watchList
  router.post("/", watchlist.insert);

  app.use("/watchList", router);
};
