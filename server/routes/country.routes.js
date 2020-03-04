module.exports = app => {
    const country = require("../controllers/country.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all countrys
    router.get("/", country.findAll);
  
    // Retrieve a single country with id
    // router.get("/:id", country.findOne);
  
    
    app.use("/country", router);
  };
  