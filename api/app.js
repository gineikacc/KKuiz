var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();

var APIRouter = require("./routes/API");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api", APIRouter);

module.exports = app;
