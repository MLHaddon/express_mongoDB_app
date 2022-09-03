const express = require("express");
const model = require('./models');
const app = express();

app.get("/users", async (request, response) => {
  const users = await model.User.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add_user", async (request, response) => {
  const user = new model.User(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;