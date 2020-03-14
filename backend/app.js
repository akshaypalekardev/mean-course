const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("Frist Middleware")
  next();
});

app.use((req, res, next) => {
  res.send("Hellp from express!");
});

module.exports = app;
