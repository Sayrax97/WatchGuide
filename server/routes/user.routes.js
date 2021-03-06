module.exports = app => {
  const fs = require("fs");
  const user = require("../controllers/user.controller.js");
  const multer = require("multer");
  const storage = multer.diskStorage({
    destination: function(req, res, cb) {
      const { username } = req.body;
      const dir = `./img/profiles/${username}`;
      fs.mkdirSync(dir);
      cb(null, dir);
    },
    filename: function(req, file, cb) {
      cb(null, "profile.jpg");
    }
  });
  const upload = multer({
    storage: storage
  });
  var router = require("express").Router();

  //Login user
  router.post("/login", upload.none(), user.login);

  // Create a new user
  router.post("/", upload.none(), user.create);

  //Check if user has film on watchlist
  router.post("/watchlist", user.isOnWatchList);

  // Retrieve a single user with id
  router.get("/:id", user.findOne);

  //Get user profile
  router.get("/pr", user.profile);

  // Retrieve all users
  router.get("/", user.findAll);

  //Watchlist
  router.get("/watchlist/:id", user.watchlist);

  //change profile picture
  router.put("/change", upload.single("profileImage"), user.change);

  // Update a User with id
  router.put("/:id", user.update);

  app.use("/user", router);
};
