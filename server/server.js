const express = require("express");
const app = express();
const port = 3000;
var http = require("http").createServer(app);
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log("Server je aktiviran"));
