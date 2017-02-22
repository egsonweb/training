$(document).ready(function() {
  var $prev = $('a.prev');
  var $next = $('a.next');
  var current = 0;
  var length = $('.slider-item').length;

  $prev.on('click', function(e) {
    e.preventDefault();
    current -= 1;
    if (current <= 0) {
      current = length - 1;
    }
    $('.slider').css({
      marginLeft: current*-820 + 'px'
    })
  });

  $next.on('click', function(e) {
    e.preventDefault();
    current += 1;
    if (current >= length) {
      current = current % length;
    }
    $('.slider').css({
      marginLeft: current*-820 + 'px'
    })
  });

  $('.slider-item > p:nth-child(1), .slider-item > p:nth-child(2)').truncate()

})
