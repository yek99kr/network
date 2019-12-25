const shake= new Audio("shake.wav");
const drop= new Audio("drop.wav");
const water= new Audio("water.wav");
const drawer= new Audio("drawer.wav");



window.onload = function(){

	// $(".menu").click(function(){
	// 	$(".menu").animate({
	// 		right:"0px"
	// 	},1000);
	// 	drawer.play();

	// });

	// $(".menu").mouseleave(function(){
	// 	$(".menu").animate({
	// 		right:"-370px"
	// 	},1000);
	// 	drawer.play();
		
	// });


	$("body").click(function(){
		water.play();
	});

// 	function moveFish(){
// 	var move = $('.fish1').getBoundingClientRect().left;

// 	move=move+1;

// }
// 	windowWidth = $(window).width();
// 	windowHeight = $(window).height();

// 	for (var i=0; i<fishNum; i++){
// 		var fish = $('<div class="fish1"><img src="fish.png"></div>');
// 		var randX = randNum(windowWidth);
// 		var randY = randNum(windowHeight);


// 		$(fish).css('top', randY + 'px');
// 		$(fish).css('left', randX + 'px');
		
// 		$('body').append(fish);
// 	}

// 	allFish = $('.fish1');

// 	setInterval(moveFish, 1000);

	$('.feed').click(function(){
	var fishW = $('.fishes img').width();
	var fishH = $('.fishes img').height();
	shake.play();

		if (fishH<=400){		
			$('.fishes img').animate({
			height:'+=2vh',
			
		})

		};

	});

	$('.back').click(function(){
		drop.play();
	})




 $('.back').ripples({
    resolution: 500,
     perturbance:0.001,
 });

 // var fish1X= $('.fish1')[0].getBoundingClientRect().left;

 // if (fish1X<=1000){
 // 	$(".fish1").animate({"right":'+=160%'},25000);

 // }
 // if(fish1X>=0){

 // 	$(".fish1").animate({"left":'+=160%'},25000);
 // }


 function repeat(){
 	$(".fish1").css({"right":"-70%"}).show();
 	$(".fish1").animate({"right":'+=230%'},25000);
 	$(".fish1").fadeOut(500,repeat);

 }
 repeat();


  function repeat2(){
 	$(".fish2").css({"left":"-70%"}).show();
 	$(".fish2").animate({"left":'+=200%'},20000);
 	$(".fish2").fadeOut(50,repeat2);

 }
 repeat2();

  function repeat3(){
 	$(".fish3").css({"left":"-70%"}).show();
 	$(".fish3").animate({"left":'+=200%'},25000);
 	$(".fish3").fadeOut(50,repeat3);

 }
 repeat3();

  function repeat4(){
 	$(".fish4").css({"right":"-70%"}).show();
 	$(".fish4").animate({"right":'+=200%'},15000);
 	$(".fish4").fadeOut(500,repeat4);

 }
 repeat4();

   function repeat5(){
 	$(".fish5").css({"right":"-70%"}).show();
 	$(".fish5").animate({"right":'+=200%'},28000);
 	$(".fish5").fadeOut(500,repeat5);

 }
 repeat5();





}

