const light= new Audio("light.wav");
const drawer= new Audio("drawer.wav");

window.onload=function(){
	// $(".menu").click(function(){
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

	$('.light1').click(function(){
		$('div:hidden').fadeIn("fast");
		$('.light1').fadeOut("slow");
		light.play();
	})
	$('.light2').click(function(){
		$('.light2').fadeOut();
		$('.bed2').fadeOut();
		$('.back2').fadeOut();
		$('.light1').fadeIn("fast");
		light.play();
	})


	}