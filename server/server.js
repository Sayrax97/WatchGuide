const express = require("express");
const models = require("./models");
const app = express();
const port = 3000;
var http = require("http").createServer(app);
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/user/:id", (req, res) => {
  models.user.findByPk(req.params.id).then(user => {
    res.send({ user });
  });
});
app.get("/users/country/", (req, res) => {
  models.user
    .findAll({
      attributes: ["full_name", "username"],
      include: [
        {
          model: models.country,
          attributes: ["name"]
        }
      ]
    })
    .then(users => res.send({ users }));
});

app.get("/actor/role/", (req, res) => {
  models.actor
    .findAll({
      include: [
        {
          model: models.film,
          attributes: ["title"]
          //through: { where: { amount: 10 } }
        }
      ]
    })
    .then(users => res.send({ users }));
});

app.listen(port, () => console.log("Server je aktiviran"));
