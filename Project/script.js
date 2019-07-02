var $card = $('.card');
var lastCard = $(".card-list .card").length - 1;

$('li a').click(function(){ 
	var prependList = function() {
		if( $('.card').hasClass('activeNow') ) {
			var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
			$('ul').prepend($slicedCard);
		}
	}
	$('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
	setTimeout(function(){prependList(); }, 250);
});
