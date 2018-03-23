$(function() {

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$(".hidden-mnu").fadeToggle();
	});

	$(".ask").on("click", function () {
		$(this).next().slideToggle(300);
		$(".que").not($(this).next()).slideUp(300); //.css("display", "none");
		
	});

	$(".owl-work").owlCarousel({
		items: 3,
		loop: true,
		dotsEach: true,
		nav: true,
		margin: 20,
		navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

});
