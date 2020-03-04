const models = require("../models");
const country = models.country;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  country
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all countries"
      });
    });
};