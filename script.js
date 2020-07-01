$(function(){
	
	$('.click').on('click', function(){
		
		$('.burger-menu').slideToggle(500);
        $(".burger-menu").css("display", "flex");
 });
	
});

$(document).ready(function(){
	$(".hamburger").click(function(){
	  $(this).toggleClass("is-active");
	});
  });
  