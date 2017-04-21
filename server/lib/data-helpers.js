"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

module.exports = function makeDataHelpers(db) {
  return {
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err,tweet) => {
        callback(err,tweet);
      });
    }
  }

}






