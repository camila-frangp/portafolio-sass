$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.dropdown-button').dropdown({hover: true});
	$('.slider').slider();
	$('.collapsible').collapsible();

	$(".img1").hover(function(){
		$(this).css("background-color","rgba(0,0,0,0.8)");
		$(this).css("z-index","1");
	})
});


