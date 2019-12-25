const drawer= new Audio("drawer.wav");

const key= new Audio("key.wav");

window.onload=function(){

	$(".container").click(function(){
		$(".container").animate({
				top:"-5%"
		},1000)
		drawer.play();

	});

	$(".container").mouseleave(function(){
		$(".container").animate({
				top:"-80%"
		},1000)
		drawer.play();
	});

	$(".key1").mouseover(function(){
		key.play();
	})
	$(".key2").mouseover(function(){
		key.play();
	})
	$(".key3").mouseover(function(){
		key.play();
	})
}