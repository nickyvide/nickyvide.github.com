$(function() {

$(".btnup").click(function(){
	$(".slideupsect").toggleClass("active");
	if ($(".slideupsect").hasClass("active")){
		$(".btnup").html("<i class='fa fa-angle-down' aria-hidden='true'></i>");
	}
	else{
		$(".btnup").html("<i class='fa fa-angle-up' aria-hidden='true'></i>");
	}
});
$(".slider").owlCarousel({
	loop: true,
	items: 1,
	itemClass: "slide-wrap",
	nav: true,
	navText: ""
});
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
$(".navigation .sf-menu").superfish({
	cssArrows: false,
	hoverClass: "slide"
});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
