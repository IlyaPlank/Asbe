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

	//Таймер
	function timer() {
		var s = $(".secs");
		var m = $(".mins");
		var h = $(".hous");
		var d = $(".days");
		var nowDate = new Date();
		var achiveDate = new Date(2019, 0, 28, 17, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
		var result = (achiveDate - nowDate) + 1000;
		if (result < 0) {
			s.text("00");
			m.text("00");
			h.text("00");
			d.text("00");
			return undefined;
		}
		var seconds = Math.floor((result / 1000) % 60);
		var minutes = Math.floor((result / 1000 / 60) % 60);
		var hours = Math.floor((result / 1000 / 60 / 60) % 24);
		var days = Math.floor(result / 1000 / 60 / 60 / 24);
		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		s.text(seconds);
		m.text(minutes);
		h.text(hours);
		d.text(days);
		setTimeout(timer, 1000);
	}
	//setInterval(timer, 1000);

	$(".contact-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$(".done").css("visibility", "visible");
			setTimeout(function () {
				$(".done").css("visibility", "hidden");
			}, 2000);
			$(".contact-form").trigger("reset");
		});
		return false;
	});
});
