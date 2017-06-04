$(function () {
	$('.toggle').on('click', function () {
		$('.menu__list').slideToggle(300, function  () {
			if($(this).css('display')==='none') {
				$(this).removeAttr('style');
			}
		});
	});

	$("#carousel").owlCarousel({
		//autoPlay : true,
		singleItem : true,
		navigationText	: false,
		rewindNav : true,
		navigation : true, // Show next and prev buttons
     	pagination: true
	});
	$("#carousel2").owlCarousel({ 
		items : 4,
		//stagePadding: 50,
		margin:0,
		navigationText	: false,
		rewindNav : true,
	    pagination : false,
	    navigation : true
	});
});