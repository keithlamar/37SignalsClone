$(document).ready(function() {
	$("button:first, .hover-intro.left").hover(function(){
		$("#intro").hide();
		$(".hover-intro.left").removeClass("hidden");
	}, function(){
		$("#intro").show();
		$(".hover-intro.left").addClass("hidden")
	});	
	
	$("button.nthchild(1), .hover-intro.center").hover(function(){
		$("#intro").hide();
		$(".hover-intro.center").removeClass("hidden");
	}, function(){
		$("#intro").show();
		$(".hover-intro.center").addClass("hidden")
	});	

	$("button:last, .hover-intro.right").hover(function(){
		$("#intro").hide();
		$(".hover-intro.right").removeClass("hidden");
	}, function(){
		$("#intro").show();
		$(".hover-intro.right").addClass("hidden")
	});	

});