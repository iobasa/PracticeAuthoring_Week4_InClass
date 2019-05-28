(() => {
	//stub
	//
	console.log('fired!');

	// variable at the top
	let headline = document.querySelector("h1");
		subhead = document.querySelector("h3");
		theButton = document.querySelector("button");

	// functions in the middle [what you want to do]
	function changeText() {
		headline.textContent = "Now I'm different";
		subhead.textContent = "hey me too, but that's ok."
	}

	// function calls / event handling at the bottom
	//changeText();
	
	theButton.addEventListener("click", changeText);
})();