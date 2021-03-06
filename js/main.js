;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") !== -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") !== -1) || 
			(navigator.platform.indexOf("iPod") !== -1)
	    );
	};

	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	var sliderMain = function() {
		
	  	$('#group-6-section-1 .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000
	  	});

	  	$('#group-6-section-1 .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#group-6-section-1 .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	$('.js-group-6-next').on('click', function(event){

	  		event.preventDefault();
	  		$('html, body').animate({
				scrollTop: $(this).closest('#group-6-section-1').next().offset().top
			}, 800, 'easeOutExpo');
	  		
	  	});

	};

	var sliderTestimony = function() {

		$('#group-6-section-7 .flexslider').flexslider({
			animation: "slide",
			slideshowspeed:5000,
			directionNav: false,
			controlNav: true,
			smoothHeight: false,
			reverse: false
	  	});

	};
	
	var sliderSection3 = function(){
			$('#group-6-section-3 .slides').flexslider({
				animation:"slide",
				slideshow:false,
				directionNav:false,
				cotrolNav: true,
				smoothHeight:false,
				reverse:false,
				multipleKeyboard:true
			});
	};
	
	var sliderSection4 = function() {
		$('#group-6-section-4 .flexslider').flexslider({
			animation: "slide",
			slideshow:false,
			directionNav: true,
			controlNav: true,
			smoothHeight: true,
			reverse: false
	  	});
	};
	

	var offcanvasMenu = function() {

		$('body').prepend('<div id="group-6-offcanvas" />');
		$('#group-6-offcanvas').append($('#group-6-main-nav').clone());

		setTimeout(function(){
			$('#group-6-offcanvas').prepend('<a href="#" class="js-group-6-offcanvas-close group-6-offcanvas-close" />');
			$('#group-6-offcanvas #group-6-main-nav').attr('id', '');
		}, 200);
		
	};

	var mainMenuSticky = function() {
		
		var sticky = $('.js-sticky');

		sticky.css('height', sticky.height());
		$(window).resize(function(){
			sticky.css('height', sticky.height());
		});

		var $section = $('.group-6-main-nav');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {

			    	$section.css({
			    		'position' : 'fixed',
			    		'top' : 0,
			    		'width' : '100%',
			    		'z-index' : 99999
			    	}).addClass('group-6-shadow');

			}

		}, {
	  		offset: '0px'
		});

		$('.js-sticky').waypoint(function(direction) {
		  	if (direction === 'up') {
		    	$section.attr('style', '').removeClass('group-6-shadow');
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 69; }
		});

	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#group-6-offcanvas, .js-group-6-nav-toggle, .js-group-6-offcanvas-close");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas-visible') ) {

	    		$('body').removeClass('group-6-overflow offcanvas-visible');

	    		$('.js-group-6-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$('body').on('click', '.js-group-6-offcanvas-close', function(event){
			
			if ( $('body').hasClass('offcanvas-visible') ) {
	    		$('body').removeClass('group-6-overflow offcanvas-visible');
	    		$('.js-group-6-nav-toggle').removeClass('active');
	    	}

	    	event.preventDefault();

		});

	};
	
	// Parallax
	var parallax = function() {

		$(window).stellar();

	};


	// Redirect page 
	var redirectPage = function(url) {
		
		window.location = url;
	};

	var pageTransition = function() {

		$("body").css("display", "none");
		
		
		$("body").fadeIn(2000);
		
		$("a.transition").click(function(event){
		  	event.preventDefault();
		  	var linkLocation = this.href;

		  	$("body").fadeOut(2000, redirectPage);      
		  	
		  	redirectPage(linkLocation);
		});
			
	};
	
	var mqsmall = "(min-device-width:320px)";
    var mqbig   = "(min-device-width:960px)";
    var imageresize = function () {
        if(window.matchMedia(mqbig).matches) {
            $('#background').each(function () {
                $(this).css('background-color','black');
				$(this).addClass('background2');
		setTimeout(function(){
			$('#background').removeClass('background2').addClass('background1');
		},2250);
            });
        }
	};
	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-group-6-nav-toggle', function(event){

			var $this = $(this);

			$('body').toggleClass('group-6-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function() {

		$(window).scroll(function(){

			var header = $('#group-6-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top group-6-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top group-6-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top group-6-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 

		   $('#group-6-section-1 .flexslider .group-6-overlay .group-6-overlay-mobile').css({
				'opacity' : (0.5)+(scrlTop/200)
		   });

		   if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-group-6-nav-toggle').removeClass('active');
		   }
		 
		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-group-6-nav-toggle').removeClass('active');
		   }
		});
		
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});

		if ( $(this).attr('href') !== "#") {
			$('#group-6-main-nav a:not([class="external"]), #group-6-offcanvas a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');


				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);	
			    	
			   }
			   event.preventDefault();

			});
		}

		


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		
		$('#group-6-main-nav li, #group-6-offcanvas li').removeClass('active');
		$('#group-6-main-nav, #group-6-offcanvas').find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		
	};

	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}

		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );


	};


	// Document on load.
	$(function(){

		pageTransition();
		imageresize();
		fullHeight();
		sliderMain();
		sliderTestimony();
		sliderSection3();
		sliderSection4();
		offcanvasMenu();
		mainMenuSticky();
		mobileMenuOutsideClick();
		parallax();
		burgerMenu();
		scrolledWindow();
		clickMenu();
		navigationSection();
		goToTop();


		// Animations
		contentWayPoint();
		
		

	});


}());