(function ($) {
"use strict";


/* 2. sticky And Scroll UP */
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
	  $(".header-sticky").removeClass("sticky-bar");
	  $('#back-top').fadeOut(500);
	} else {
	  $(".header-sticky").addClass("sticky-bar");
	  $('#back-top').fadeIn(500);
	}
  });


//data background 
$("[data-background]").each(function (){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.brand-active').owlCarousel({
    loop:true,
    margin:30,
	nav:false,
	autoplay:true,
autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
 $('.video-popup').magnificPopup({
	type:'iframe',
 iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		  '</div>', 
  patterns: {
	youtube: {
	  index: 'youtube.com/', 
 
	  id: 'v=',
	  src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
	},
	vimeo: {
	  index: 'vimeo.com/',
	  id: '/',
	  src: '//player.vimeo.com/video/%id%?autoplay=1'
	},
	gmaps: {
	  index: '//maps.google.',
	  src: '%id%&output=embed'
	}
  },
  srcAction: 'iframe_src', 
 }  
});


// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

$('.autoplay').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: false,
	arrows:false,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		}
	  ]	
  });
	  


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

// Counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// Slick slider
$('.testimonial-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,
	fade: true,
	asNavFor: '.testimonial-img-active'
  });
  $('.testimonial-img-active').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.testimonial-active',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: '0px',
	arrows:false,
	autoplay: true,
	autoplaySpeed: 10000,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]	
  });


})(jQuery);