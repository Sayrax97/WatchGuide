const express = require("express");
const models = require("./models");
const app = express();
const port = 3000;
var http = require("http").createServer(app);
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users/:id", (req, res) => {
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
require("./routes/user.routes")(app);
app.listen(port, () => console.log("Server je aktiviran"));
