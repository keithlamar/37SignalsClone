$(document).ready(function() {
	$("button:first, .hover-intro.left").hover(function(){
		$(".hover-intro.left").removeClass("hidden");
		$("#intro").hide();
	}, function(){
		$(".hover-intro.left").addClass("hidden")
		$("#intro").show();
		
	});	
	$("button#middle, .hover-intro.center").hover(function(){
		$(".hover-intro.center").removeClass("hidden");
		$("#intro").hide();
		
	}, function(){
		$(".hover-intro.center").addClass("hidden")
		$("#intro").show();
		
	});	

	$("button:last, .hover-intro.right").hover(function(){
		$("#intro").hide();
		$(".hover-intro.right").removeClass("hidden");
	}, function(){
		$("#intro").show();
		$(".hover-intro.right").addClass("hidden")
	});	

});