const drawer= new Audio("drawer.wav");

window.onload=function(){
	// 	$(".menu").click(function(){
	// 	$(".menu").animate({
	// 		right:"-100px"
	// 	},1000);
	// 	drawer.play();
	// });

	// $(".menu").mouseleave(function(){
	// 	$(".menu").animate({
	// 		right:"-470px"
	// 	},1000);
	// 	drawer.play();
	// });

	$('.flush').click(flushToilet);



	$(".tis1").draggable();
	$(".tis2").draggable();
	$(".slip1").draggable();
	$(".slip2").draggable();
	$(".mon1").draggable();
	$(".mon2").draggable();
	$(".mon3").draggable();
	$(".mon4").draggable();
	$(".mon5").draggable();
	$(".mon6").draggable();
	$(".mon7").draggable()
	$(".mon8").draggable()

}

const flush= new Audio("flush.wav");



function flushToilet(){
	var flushX = $('.flushbox')[0].getBoundingClientRect().left;
	var flushY = $('.flushbox')[0].getBoundingClientRect().top;
	var flushW = $('.flushbox').width();
	var flushH = $('.flushbox').height();
	var items = $('.mons').children();
	$(items).each(function(){
		var itemX = this.getBoundingClientRect().left;
		var itemY = this.getBoundingClientRect().top;

		if ((itemX > flushX && itemX < flushX + flushW) &&
			(itemY > flushY && itemY < flushY + flushH)){
			$(this).css('transform', 'rotate(180deg) scale(0)'); 
			flush.play();
			$(this).animate({
				opacity:"0",

			})
		}
	});
}
