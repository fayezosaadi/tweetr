/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 /* globals $, moment */
$(function onReady() {
  const $tweets = $('#tweets');
  const $textarea = $('textarea');

  function createTweetElement(tweet) {
      return `<article class="tweet-container">
          <header>
            <img class="tweetlogo" src="${tweet.user.avatars.small}">
            <span class="fullusername">${tweet.user.name}</span>
            <span class="shortusername">${tweet.user.handle}</span>
          </header>
          <span class='tweets'>${tweet.content.text}</span>
          <footer>
            <p>${tweet.created_at}</p>
              <div>
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
          </footer>
        </article>`;
      }

  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  function enhanceWithTimeAgo(tweet) {
    return Object.assign({}, tweet, { created_at: moment(tweet.created_at).fromNow() });
  }

  function loadTweets(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(tweetMessage) {
      renderTweets(tweetMessage.reverse());
      }
    });
  }

  function renderTweets(tweets) {
    $tweets.html(tweets.map(enhanceWithTimeAgo).map(createTweetElement));
  }

$('form').on('submit', function (event) {
  event.preventDefault();
  if ($textarea.val() && $textarea.val().length < 141){
    var tweetcontent = $textarea.val();
    tweetcontent = escape(tweetcontent).replace(/&/g, '%26');

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data:`text=${tweetcontent}`,
      // $(this).serialize()
      success: function(){
        loadTweets();
        $textarea.val('');
        $textarea.trigger('input');
      }
    });
  }
  else if ($textarea.val()==''){
    alert ("Can't submit an empty tweet")
  }
  else if ($textarea.val().length){
    alert ("tweet is too long")
  }
});

loadTweets();

$( "#compose" ).click(function() {
  $( ".new-tweet" ).slideToggle( 200, function() {
    $("textarea").focus();
  });
});
});








