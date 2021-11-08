"use strict";

//module
const express = require('express');
const app = express();

//app viewFile setting
app.set('view engine', 'ejs');
app.set("views", "./src/views");

//router
const home = require("./src/routes/home");
//login.ejs using login.js
app.use(express.static(`${__dirname}/src/public`));
//middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
