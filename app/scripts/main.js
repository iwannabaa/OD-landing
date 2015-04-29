'use strict';

$(function(){
	$('.toggle-content').on('click', function(e) {
		e.preventDefault();
		$('.section-user-products').toggleClass('active');
	});
  $('.close-sidebar').on('click', function(e){
    e.preventDefault();
    $('.content-wrapper').animate({width: '100%'});
    $('.sidebar-wrapper').animate({opacity: 0});
    $('.search-input').removeClass('office-open');
    setTimeout(function(){
      $('.item-office').show().animate({opacity: 1}, 200);
    }, 400);
  });
  $('.item-office').on('click', function(e) {
    e.preventDefault();
    $('.content-wrapper').animate({width: '80%'});
    $('.sidebar-wrapper').animate({opacity: 1});
    $(this).animate({opacity: 0}, 400, function(){
      $('.item-office').hide();
      $('.search-input').addClass('office-open');
    });
  });
});