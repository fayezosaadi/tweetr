/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 /* globals $, moment */
$(function onReady() {
  const $tweets = $('#tweets');

  const data = [
    {
      user: {
        name: 'Newton',
        avatars: {
          'small': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
          'regular': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
          'large': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png',
        },
        'handle': '@SirIsaac',
      },
      'content': {
        'text': 'If I have seen further it is by standing on the shoulders of giants',
      },
      'created_at': 1461116232227,
    },
    {
      'user': {
        'name': 'Descartes',
        'avatars': {
          'small':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
          'regular': 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
          'large':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png',
        },
        'handle': '@rd' },
      'content': {
        'text': 'Je pense , donc je suis',
      },
      'created_at': 1461113959088,
    },
    {
      'user': {
        'name': 'Johann von Goethe',
        'avatars': {
          'small':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
          'regular': 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
          'large':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png',
        },
        'handle': '@johann49',
      },
      'content': {
        'text': 'Es ist nichts schrecklicher als eine tätige Unwissenheit.',
      },
      'created_at': 1492571528528,
    }
  ];


  function template(tweet) {
    return `<article class="tweet-container">
          <header>
            <img class="tweetlogo" src="${tweet.user.avatars.small}">
            <span class = "fullusername">${tweet.user.name}</span>
            <span class = "shortusername">${tweet.user.handle}</span>
          </header>
          <span class = 'tweets'>${tweet.content.text}</span>
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

  function enhanceWithTimeAgo(tweet) {
    return Object.assign({}, tweet, { created_at: moment(tweet.created_at).fromNow() });
  }

  $tweets.append(data.map(enhanceWithTimeAgo).map(template));

// function createTweetElement(tweet) {
//   var $tweet = $('<article>').addClass('tweet-container');
//   var $header = $('<header>');
//   var $img = $('<img>').addClass('tweetlogo').attr('src', tweet.small);
//   var $span1 = $('<span>').addClass('fullusername');
//   var $span2 = $('<span>').addClass('shortusername');
//   var $span3 = $('<span>');
//   var footer = $('<footer>');

//   $('.tweets-container').append($tweet);
//   $('.tweet-container').append($header);
//   $($header).append($img);
//   $($header).append($span1);
//   $($header).append($span2);
//   $('.tweet-container').append($span3);


// }

// var $tweet = createTweetElement(tweetData);
//   console.log($tweet);
// });
});
