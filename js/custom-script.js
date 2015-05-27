jQuery(document).ready( function($) {
	$('select').change(function() {
		if ($(this).children('option:first-child').is(':selected')) {
			$(this).addClass('placeholder');
		} else {
			$(this).removeClass('placeholder');
		}
	});
	$(window).scroll(function () {
		var offset = $('.top-content').offset();
		if (offset.top > 2) {
			$('.top-content').addClass('navbar-fixed-top');
			$('.top-content').removeClass('no-affix');
		} else {
			$('.top-content').removeClass('navbar-fixed-top');
			$('.top-content').addClass('no-affix');
		}
	});

	//tab page setting 
	$('.list-xem-theo li').click(function(e){
		e.preventDefault();
		console.log($(this).index());
		$('.box-list-xem-theo .list-xem-theo-items').hide();
		$('.box-list-xem-theo .list-xem-theo-items').eq($(this).index()).show();
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
				// if ($(".page-content-inner").hasClass("scroll")) {
				// 	$blog.infinitescroll({
				// 			navSelector  : '.loop-pagination', // selector for the paged navigation
				// 			nextSelector : '.loop-pagination a:first', // selector for the NEXT link (to page 2)
				// 			extraScrollPx: 120,
				// 			itemSelector : 'article.type-post', // selector for all items you
				// 			animate      : true,
				// 			bufferPx     : 40,
				// 			errorCallback: function () {
				// 			},
				// 			infid        : 0, //Instance ID
				// 			loading      : {
				// 				finished   : undefined,
				// 				finishedMsg: 'No more pages to load.',
				// 				img        : "http://i.imgur.com/qkKy8.gif",
				// 				msgText    : "<em>Loading the next set of posts...</em>",
				// 				speed      : 'fast',
				// 				start      : undefined
				// 			}
				// 		},
				// 		function (newElements) {
				// 			$blog.isotope('appended', jQuery(newElements));
				// 			$blog.imagesLoaded(function () {
				// 				$blog.isotope('layout');
				// 			});
				// 		});
				// }
			});
		}
	}
	$(window).load(function () {
		load_masonry();
		var HeightL = $('.sidebar-left-setting').height();
		var HeightR = $('.content-right-setting').height();
		if( HeightR > HeightL ){
			$('.sidebar-left-setting').height(HeightR);
		}
	});
	$(window).resize(function(){
		var HeightL = $('.sidebar-left-setting').height();
		var HeightR = $('.content-right-setting').height();
		if( HeightR > HeightL ){
			$('.sidebar-left-setting').height(HeightR);
		}
		load_masonry();
	});
	$('.top-content .nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
		load_masonry();
	});
	$('.checkbox input[type="checkbox"]').rsCheckAble();
	$('.radio-inline input[type="radio"]').rsCheckAble();

})(jQuery);