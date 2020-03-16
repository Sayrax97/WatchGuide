const models = require("../models");
const review = models.review;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  review
    .findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all geners"
      });
    });
};

exports.insert = (req, res) => {
  if (!req.body.film) {
    res.status(400).send({
      message: "Unknown movie"
    });
  }
  if (!req.body.user) {
    res.status(400).send({
      message: "Unknown user"
    });
  }
  if (!req.body.stars) {
    res.status(400).send({
      message: "Unknown user"
    });
  }
  let newReview = {
    user: req.body.user,
    film: req.body.film,
    stars: req.body.stars
  };
  review
    .create(newReview)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while adding new movie"
      });
    });
};
