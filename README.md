# week-6-giphy

(remove this before publishing) It is best to prefix your Homework Names so that you may easily filter them out later when you may have actual projects that you are working on. It also important to let employers know that this was only a hw assignment and not your personal work. (ex. hw_giph-tastic)

## Live Link (If relevant)
 - www.example.com

## Description on how to use the app

## Requirements
#### Add a simple description of what the HW requirements were

- Add bullets
- Like this

1. Or you can use numbered lists
2. Like this
	- You can also add a tab and a "-" to add a sub-bullet like this
3. Make sure the requirements are understandable

## Technologies Used
#### Use bullets to list out the technologies used. For example,
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination
- Here, you can either provide a brief summary about your code and perhaps what you learned or you can go into specif detail about how you tackled certain tasks.
- Use code snippets for placing example code and then describing it
- Use subheaders to organize your thoughts
- This is the most important part as it will show other what your code does with out having to download the code. 
- In essense, this will also be a form of notes that you may later reference weeks later

-------------

##Here is an example of what a Readme could look like:

### AJAX Request to Giphy (Example)
I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned. 

```
var settings = {
  "url": "http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC",
  "method": "GET"
  }
}
function getGiphyList(cb){
	$.ajax(settings).done(function (response) {
	  cb(response)
	});
}
```