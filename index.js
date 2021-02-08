const express = require("express");
const app = express();
const db = require("./Config/mongoose");
const Task = require("./Models/tasks");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Setting the assets folder up for use
app.use(express.static("./Assets"));

//Sending all routes to Routes folder for handling
app.use("/", require("./Routes"));

//Using ejs for view engine
app.set("view engine", "ejs");
app.set("views", "./Views");

//Setting up server on port 8000
const port = 8000;
app.listen(port, (err) => {
  if (err) {
    console.log(`Error running the server : ${err}`);
    return;
  }
  console.log(`Server is running on port : ${port}`);
});
