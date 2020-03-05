const models = require("../models");
const film = models.film;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  film
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all films"
      });
    });
};
exports.findOne = (req, res) => {
  let id = req.params.id;
  film
    .findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving film with id=" + id
      });
    });
};
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title not provided"
    });
    return;
  } else if (!req.body.length) {
    res.status(400).send({
      message: "Length of the film not provided"
    });
    return;
  } else if (!req.body.release_date) {
    res.status(400).send({
      message: "Release date not provided"
    });
    return;
  }
  let newfilm = {
    title: req.body.title,
    original_title: req.body.original_title,
    length: req.body.length,
    description: req.body.description,
    release_date: req.body.release_date,
    trailer_link: req.body.trailer_link,
    cover_path: req.body.cover_path,
    parantial_quide: req.body.parantial_quide
  };
  film
    .create(newfilm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating film"
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
  film
    .update(req.body, {
      where: { id: id }
    })
    .then(valid => {
      if (valid == 1) {
        res.send({
          message: "film was successfully updated"
        });
      } else {
        res.send({
          message:
            "Bad request body provided, missing some attributes maybe or id wrong"
        });
      }
    });
};
