$(document).ready(function(){
	$('.menu-opener').on('click', function() {
		$('.menu-opener').toggleClass('open');
		$('nav').toggleClass('menu-opne');
	})
	

});
$(window).on('load', function(){
	$('.preloader').fadeOut()
})
