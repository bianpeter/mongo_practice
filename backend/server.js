const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const port = 8000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}!`)
})

//mongoose connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
})
  .then((res) => console.log('Connected to Database'))
  .catch((err) => console.error(err))

app.get("/", (req, res) => {

})