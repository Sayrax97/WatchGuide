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

exports.findOne = (req, res) => {
  console.log(req.params);

  if (!req.params.user) {
    res.status(400).send({
      message: "Unknown user"
    });
  }
  if (!req.params.film) {
    res.status(400).send({
      message: "Unknown movie"
    });
  }

  let idUser = req.params.user;
  let idFilm = req.params.film;
  review
    .findOne({
      where: {
        film: idFilm,
        user: idUser
      }
    })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving review"
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
  let idFilm = req.body.film;
  let idUser = req.body.user;

  review
    .findOne({
      where: {
        film: idFilm,
        user: idUser
      }
    })
    .then(found => {
      if (found) {
        review
          .update(req.body, {
            where: { film: idFilm, user: idUser }
          })
          .then(valid => {
            if (valid == 1) {
              res.send({
                message: "Review was successfully updated"
              });
            } else {
              res.send({
                message:
                  "Bad request body provided, missing some attributes maybe or id wrong"
              });
            }
          });
      } else {
        review
          .create(newReview)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occured while adding new movie"
            });
          });
      }
    });
};
