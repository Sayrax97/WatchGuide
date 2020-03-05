const models = require("../models");
const gener = models.gener;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  gener
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all geners"
      });
    });
};
