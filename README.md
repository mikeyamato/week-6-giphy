# week-6-giphy

(remove this before publishing) It is best to prefix your Homework Names so that you may easily filter them out later when you may have actual projects that you are working on. It also important to let employers know that this was only a hw assignment and not your personal work. (ex. hw_giph-tastic)

## Live Link (If relevant)
 - https://mikeyamato.github.io/week-6-giphy/

## Description on how to use the app
Type in the name of a fruit (or anything to that matter) and watch images magically appear. Click on each image and see what happens. 

## Requirements
- Have gifs appear based on a search query
- Animate gifs with a click

## Technologies Used
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination
- Much of the code utilized were things learned in-class previously. The section I had the most difficultly with was figuring out how to make the image animate/still with a click. Eventually with the help of a classmate, I needed to include $(document).on("click"). 
-------------

### AJAX Request to Giphy
I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned. 

```
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

				var rating = response.data[i].rating;
				var pOne = $("<p>").text("Rating: " + rating);  // creating a <p> dynamically
				gifDiv.append(pOne);
					console.log(rating);
			
				
				var static = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
				static.attr("data-still", response.data[i].images.fixed_height_still.url);
				static.attr("data-animate", response.data[i].images.fixed_height.url);
				static.attr("data-state", "still");  // creating an <img> dynamically
				static.addClass("animate");
				gifDiv.append(static);

					console.log(static);

				$(".gif-dump").prepend(gifDiv);


			};
		});
	};
```