const models = require("../models");
const watchList = models.watchlist;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  watchList
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all geners"
      });
    });
};

exports.insert = (req, res) => {
  if (!req.body.film_id) {
    res.status(400).send({
      message: "Unknown movie"
    });
  }
  if (!req.body.user_id) {
    res.status(400).send({
      message: "Unknown user"
    });
  }
  let newMovie = {
    user_id: req.body.user_id,
    film_id: req.body.film_id,
    watched: req.body.watched
  };
  watchList
    .create(newMovie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while adding new movie"
      });
    });
};
