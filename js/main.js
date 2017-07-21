$(document).ready(function(){

  $('.burger-nav').on('click', function() {
    $('header .nav').toggleClass('open');
  });

  $('header .nav li a').on('click', function(){
    $('header .nav li a').removeClass('active');
    $(this).addClass('active');
  });
});
