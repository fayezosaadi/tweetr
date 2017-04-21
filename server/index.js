"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const connect = require("./lib/mongo_server");

connect(function(databaseObjectPassedFromMongo) {
  const DataHelpers = require("./lib/data-helpers.js")(databaseObjectPassedFromMongo);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});


