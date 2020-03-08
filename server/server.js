const express = require("express");
const models = require("./models");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
var http = require("http").createServer(app);
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static("img"));

//ROUTES
require("./routes/user.routes")(app);
require("./routes/country.routes")(app);
require("./routes/actor.routes")(app);
require("./routes/film.routes")(app);
require("./routes/gener.routes")(app);

app.listen(port, () => console.log("Server je aktiviran"));
