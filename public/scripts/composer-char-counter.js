$(document).ready(function(){
  const errorClass = 'error';
  const $count = $('span.counter');
  const tweetMaxLength = 140;

  $('.new-tweet').on('input', 'textarea', function() { // listens to the keyup event
    var textLength = $(this).val().length;               // textarea char input
    var remainingCharacters = tweetMaxLength - textLength;
    $count.text(remainingCharacters);
    if (remainingCharacters < 0) {
      $count.addClass(errorClass);
    } else {
      $count.removeClass(errorClass);
    }
  });
});



