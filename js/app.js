$(document).ready(function(){

	$(".international").on("click", function(event){
		// Prevents links from trying to go somewhere
		event.preventDefault(); 
		// Check if the click on class has active it 
		// it does then remove it
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		$("#international-drop").show();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();
		// Slides down all of the content
		$("#slide-down").slideDown();
		// clears all active classes, before adding an active class
		$("#primary-nav li").removeClass("active");
		// Adds active
		$(this).addClass("active");
		}
	});
	$(".politics").on("click", function(event){
		event.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();	
		} else {
			$("#international-drop").hide();
			$("#politics-drop").show();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();

			$("#slide-down").slideDown();

			$("#primary-nav li").removeClass("active");

			$(this).addClass("active");
		}
	});	

	$(".business").on("click", function(event){
		event.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").show();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();

			$("#slide-down").slideDown();

			$("#primary-nav li").removeClass("active");

			$(this).addClass("active");
		}
	});
	$(".technology").on("click", function(event){
		event.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").show();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();

			$("#slide-down").slideDown();

			$("#primary-nav li").removeClass("active");

			$(this).addClass("active");
		}
	});
	$(".culture").on("click", function(event){
		event.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").show();
			$("#blogs-drop").hide();

			$("#slide-down").slideDown();

			$("#primary-nav li").removeClass("active");

			$(this).addClass("active");
		}
	});
	$(".blogs").on("click", function(event){
		event.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").show();

			$("#slide-down").slideDown();

			$("#primary-nav li").removeClass("active");

			$(this).addClass("active");
		}
	});

});