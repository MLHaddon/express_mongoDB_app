const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 7700;

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://root:root@dbcluster0.ne68sfj.mongodb.net/test', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!!');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.use(routes);

app.listen(port, () => {
  console.log("Server is running at port " + port);
});
