const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const datetime = new Date();
  response.send(
    `${datetime.getDate()}-${datetime.getMonth() + 1}-${datetime.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
