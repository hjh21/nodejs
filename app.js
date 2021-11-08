"use strict";

const express = require('express');
const app = express();

//app viewFile setting
app.set('view engine', 'ejs');
app.set("views", "./views");

//router
const home = require("./routes/home")
app.use("/", home);

module.exports = app;
