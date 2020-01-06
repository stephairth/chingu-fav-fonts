// Text typed into the custom text (type something) box should immediately change
// the sample text displayed in each font card &

// The sample text should return to the default sample if the input box 
// (type something) no longer has any input (ex. input == "")

var customText = document.getElementById("custom-text");
var contentArray = Array.from(document.getElementsByClassName("text-content"));
var sampleText = "Turn soft and lovely anytime you have the chance. Jenny Holzer";

// if the input isn't empty, change the content of the font card to whatever is typed in the input:
customText.addEventListener("keyup", function(){
	if(customText.value !== ""){
		for(var i = 0; i < contentArray.length; i++){
			contentArray[i].textContent = customText.value;
		}
// if the input IS empty, make it go back to the sample text:
	} else {
		for(var i = 0; i < contentArray.length; i++){
			contentArray[i].textContent = sampleText;
		}
	}
});


// Font size chooser should have at least four sizes and should immediately 
// change the sample text font size in each font card:

var sizeSelector = document.getElementById("font-size");

// set the font size to the value selected in the dropdown:
sizeSelector.addEventListener("change", function(){
	for(var i = 0; i < contentArray.length; i++){
		contentArray[i].style.fontSize = (sizeSelector.value.toString() + "px");
	}
});


// Implement the clickable 'reset' icon on the far right of the major navigation; 
// it should make the page appear as if the user reloaded the page (do not actually reload the page)

// function for inside the reset button event listener below:
function resetPage(){
	for(var i = 0; i < contentArray.length; i++) {
		contentArray[i].textContent = sampleText;
		contentArray[i].style.fontSize = "20px";
		customText.value = "";
		sizeSelector.value = 20;
	}


};

// put everything back: 
var resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function(){
	resetPage();
});


// back to top button (including making it not appear until they have scrolled):

// back to top button hover message: 