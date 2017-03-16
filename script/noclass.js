$(function(){
  var w = $(window).width();
  var h = $(window).height();
  var slides = $('.slide1 > div');
  $('.container').css({ height: (h-60) + 'px' });
  $('.slide1').css({ width: slides.length + '00%' });
  slides.css({ width: w + 'px' });

  var pos = 0;

  $('.right').click(function(){
  pos--;
  $('.slide1').animate({ left: (pos * w) + 'px' });
});
$('.left').click(function(){
  pos++;
  $('.slide1').animate({ left: (pos * w) + 'px' });
});
