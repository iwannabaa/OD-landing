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
  });
});