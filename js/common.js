$(function() {

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$(".hidden-mnu").fadeToggle();
	});

});
