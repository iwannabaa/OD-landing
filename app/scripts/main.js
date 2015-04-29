'use strict';

$(function(){
	$('.toggle-content').on('click', function(e) {
		e.preventDefault();
		$('.section-user-products').toggleClass('active');
	});
});