/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 /* globals $ */


 $(document).ready(function(){

function createTweetElement(tweet){
  var $tweet = $('<article>').addClass('tweet-container');
  var $header = $('<header>');
  var $img = $('<img>').addClass('tweetlogo').attr('src', tweet.small);
  var $span1 = $('<span>').addClass('fullusername');
  var $span2= $('<span>').addClass('shortusername');
  var $span3 = $('<span>');
  var footer = $('<footer>')



  $('.tweets-container').append($tweet);
  $('.tweet-container').append($header);
  $($header).append($img);
  $($header).append($span1);
  $($header).append($span2);
  $('.tweet-container').append($span3);





}

var $tweet = createTweetElement(tweetData);
console.log($tweet);
 });


var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}



  // $('.shortusername').append(tweetData.handle)

