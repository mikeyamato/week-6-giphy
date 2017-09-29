$(function(){

var topics = [];


	function giphy(){
		var gif = $(this).attr("data-name");  // "this" is calling the clicked on button name
		gif = gif.toLowerCase().split(" ").join("+")
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=lVRKismADCsSu1S0PCi8KDLtJmZnRu2e&limit=10&rating=r";  // if filtering by rating &rating=g
			console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
				console.log(response);
		

			for(i = 0; i < response.data.length; i++){ 

				var gifDiv = $("<div class='gif'>");  // creating a div dynamically, class=gif
					console.log(gifDiv);
				// var still = $("<div data-state='still'>"); // associating 
					// console.log(still);
				var rating = response.data[i].rating;
				var pOne = $("<p>").text("Rating: " + rating);  // creating a <p> dynamically
				gifDiv.append(pOne);
					console.log(rating);

				// not working
				// var imgUrlAnimate = response.data[i].images.fixed_height.url;  // animated

				
				// var imgAnimate = $("<img>").data("animate", response.data[i].images.fixed_height.url).data("state", "still");
				// var imgStatic = $("<img>").data("still", response.data[i].images.fixed_height_still.url).data("state", "still");
				// var animate = $("<img>").attr("src", response.data[i].images.fixed_height.url);
				var static = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
				static.attr("data-still", response.data[i].images.fixed_height_still.url);
				static.attr("data-animate", response.data[i].images.fixed_height.url);
				static.attr("data-state", "still");  // creating an <img> dynamically
				static.addClass("animate");
				gifDiv.append(static);
					// console.log(imgUrlStatic);
					console.log(static);
					// console.log(imgAnimate);
					// console.log(imgStatic);

				$(".gif-dump").prepend(gifDiv);


			};
		});
	};

$(document).on("click", ".animate", function(){
	var state = $(this).attr("data-state");
	console.log(state);
	console.log(this);
	if(state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");  
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	} 
});
				



// 	function animation(){

// 		for(i = 0; i < response.data.length; i++){ 

// 				var gifDiv = $("<div class='gif' data-state='still'>");  // creating a div dynamically, class=gif
// 					console.log(gifDiv);
// 				// var still = $("<div data-state='still'>"); // associating 
// 					// console.log(still);
// 				var rating = response.data[i].rating;
// 				var pOne = $("<p>").text("Rating: " + rating);  // creating a <p> dynamically
// 				gifDiv.append(pOne);
// 					console.log(rating);


				// // not working
				// $(".gif").on("click", function(){
				// 	var state = $(this).attr("data-state");
				// 	if(state === "still") {
				// 		$(this).attr("src", $(this).attr(imgUrlAnimate));
				// 		$(this).attr("data-state", "animate");
				// 		$(this).data("state", "animate");
				// 	} else {
				// 		$(this).attr("src", $(this).attr(imgUrlStatic));
				// 		$(this).attr("data-state", "still");
				// 	}
				// });
// }
			

	function renderButton(){
		$(".buttons").empty();
		for(var i = 0; i < topics.length; i++) {
			var createButton = $("<button>");
			createButton.addClass("topic");
			createButton.attr("data-name", topics[i]);
			createButton.text(topics[i]);
			$(".buttons").append(createButton); 
		};
	};

	// pulls data from form
	$("form").submit(function(event){
		event.preventDefault();
		var searchItemData = $("#searchItem").val().trim();

			console.log(searchItemData);

		topics.unshift(searchItemData);
		renderButton();
	});


	$(document).on("click", ".topic", giphy);




















});