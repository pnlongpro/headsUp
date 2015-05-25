jQuery(document).ready( function($) {
	$('select').change(function() {
		if ($(this).children('option:first-child').is(':selected')) {
			$(this).addClass('placeholder');
		} else {
			$(this).removeClass('placeholder');
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