const models = require("../models");
const user = models.user;
const op = models.Sequelize.Op;

exports.findAll = (req, res) => {
  user
    .findAll({
      attributes: {
        exclude: ["country_id"]
      },
      include: [
        {
          model: models.country,
          attributes: ["name"]
        }
      ]
    })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: "Error retieving all users"
      });
    });
};
exports.findOne = (req, res) => {
  let id = req.params.id;
  user
    .findByPk(id, {
      attributes: {
        exclude: ["countryId"]
      },
      include: [
        {
          model: models.country,
          attributes: ["name"]
        }
      ]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });
};
exports.create = (req, res) => {
  if (!req.body.full_name) {
    res.status(400).send({
      message: "Full name not provided"
    });
    return;
  } else if (!req.body.username) {
    res.status(400).send({
      message: "Username not provided"
    });
    return;
  } else if (!req.body.password) {
    res.status(400).send({
      message: "Password not provided"
    });
    return;
  } else if (!req.body.country_id) {
    res.status(400).send({
      message: "Country not provided"
    });
    return;
  } else if (!req.body.birthday) {
    res.status(400).send({
      message: "Birthday not provided"
    });
    return;
  }
  let newUser = {
    full_name: req.body.full_name,
    username: req.body.username,
    password: req.body.password,
    country_id: req.body.country_id,
    birthday: req.body.birthday,
    image_path: req.body.image_path
  };
  user
    .create(newUser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating user"
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
  user
    .update(req.body, {
      where: { id: id }
    })
    .then(valid => {
      if (valid == 1) {
        res.send({
          message: "User was successfully updated"
        });
      } else {
        res.send({
          message:
            "Bad request body provided, missing some attributes maybe or id wrong"
        });
      }
    });
};
