jQuery(document).ready(function ($) {

	$('select').change(function () {
		if ($(this).children('option:first-child').is(':selected')) {
			$(this).addClass('placeholder');
		} else {
			$(this).removeClass('placeholder');
		}
	});
	//-------------
	$('.search-form .button').click(function () {
		if ($('.search-form .dropdown').hasClass('active')) {
			$('.search-form .dropdown').stop().removeClass('active').slideUp();
		}
		else {
			$('.search-form .dropdown').stop().addClass('active').slideDown();
		}
	});
	$('body').click(function (e) {
		var target = $(e.target);
		if (!target.is('.search-form .button')) {
			$('.search-form .dropdown').removeClass('active').slideUp();
		}
	});
	$('.search-form .dropdown li a').click(function (event) {
		event.preventDefault();
		$('.search-form .dropdown').removeClass('active').slideUp();
	});
	$(window).scroll(function () {
		var orgElementPos = $('.top-content').offset();
		orgElementTop = orgElementPos.top;
		console.log($(window).scrollTop());
		if ($(window).scrollTop() >= 110) {
			$('.top-content').addClass('navbar-fixed-top');
			$('.top-content').removeClass('no-affix');
		} else {
			$('.top-content').removeClass('navbar-fixed-top');
			$('.top-content').addClass('no-affix');
		}
	});

	//tab page setting
	$('.list-xem-theo li:first').addClass('active');
	$('.list-xem-theo li').click(function (e) {
		e.preventDefault();
		$('.box-list-xem-theo .view-by-items').hide();
		$('.box-list-xem-theo .view-by-items').eq($(this).index()).show();
		$('.list-xem-theo li').removeClass('active');
		if( ! $(this).hasClass('active') ){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}

	});
});
(function ($) {
	function load_masonry() {
		var $blog = $('.list-article.masonry .content-inner-page');
		if ($('.list-article.masonry .content-inner-page').length) {
			$blog.imagesLoaded(function () {
				$blog.isotope({
					itemSelector: '.post-item'
				});

			});
		}
	}

	$(window).load(function () {
		load_masonry();
		var HeightL = $('.sidebar-left-setting').height();
		var HeightR = $('.content-right-setting').height();
		if (HeightR > HeightL) {
			$('.sidebar-left-setting').height(HeightR);
		}
	});
	$(window).resize(function () {
		var HeightL = $('.sidebar-left-setting').height();
		var HeightR = $('.content-right-setting').height();
		if (HeightR > HeightL) {
			$('.sidebar-left-setting').height(HeightR);
		}
		load_masonry();
	});
	$('.top-content .nav-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
		load_masonry();
	});
	$('.sidebar .nav-tabs li.active a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('.checkbox input[type="checkbox"]').rsCheckAble();
	$('.radio-inline input[type="radio"]').rsCheckAble();

	$('.style-select select').selectize({
		maxItems: 3
	});


	$('.box-list-thumbnail').bxSlider({
		slideWidth  : 138,
		minSlides   : 5,
		maxSlides   : 5,
		slideMargin : 10,
		pager       : false,
		moveSlides  : 1,
		infiniteLoop: false
	});
	$('.list-post').bxSlider({
		mode       : 'vertical',
		slideWidth : 300,
		minSlides  : 3,
		maxSlides  : 3,
		slideMargin: 15,
		controls   : false,
		pager      : false
	});

	$('.list-post-1').bxSlider({
		mode       : 'vertical',
		slideWidth : 300,
		minSlides  : 3,
		maxSlides  : 3,
		slideMargin: 15,
		controls   : false,
		pager      : false
	});

})(jQuery);