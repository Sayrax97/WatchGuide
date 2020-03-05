const models = require("../models");
const actor = models.actor;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  actor
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all actors"
      });
    });
};
exports.findOne = (req, res) => {
  let id = req.params.id;
  actor
    .findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving actor with id=" + id
      });
    });
};
exports.create = (req, res) => {
  if (!req.body.full_name) {
    res.status(400).send({
      message: "Full name not provided"
    });
    return;
  } else if (!req.body.birthday) {
    res.status(400).send({
      message: "Birthday not provided"
    });
    return;
  }
  let newActor = {
    full_name: req.body.full_name,
    birthday: req.body.birthday,
    description: req.body.description,
    imdb_link: req.body.imdb_link,
    wikipedia_link: req.body.wikipedia_link
  };
  actor
    .create(newActor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating actor"
      });
    });
};
exports.update = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({
      message: "Id was not provided"
    });
    return;
  }
  let id = req.params.id;
  actor
    .update(req.body, {
      where: { id: id }
    })
    .then(valid => {
      if (valid == 1) {
        res.send({
          message: "actor was successfully updated"
        });
      } else {
        res.send({
          message:
            "Bad request body provided, missing some attributes maybe or id wrong"
        });
      }
    });
};
