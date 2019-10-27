
//Text typed into the custom text (type something) box should immediately change
// the sample text displayed in each font card:

// The sample text should return to the default sample if the input box 
// (type something) no longer has any input (ex. input == "")

var fontCardText = document.getElementsByClassName("text-content")[0];
var customText = document.getElementById("custom-text");
var sampleText = "A third of the food raised or prepared does not make it from farm or factory to fork.";

customText.addEventListener("keyup", function(){
	fontCardText.textContent = customText.value;
	if (customText.value == ""){
		fontCardText.textContent = sampleText;
	}
});





// Font size chooser should have at least four sizes and should immediately 
// change the sample text font size in each font card:

// select the dropdown and the text
var sizeSelector = document.getElementById("font-size");
var exampleFont = document.getElementsByClassName("text-content")[0];

// set the font size of the text to the value of the dropdown in pixels: 
sizeSelector.addEventListener("change", function(){
	exampleFont.style.fontSize = (sizeSelector.value.toString() + "px");
});




// Implement the clickable 'reset' icon on the far right of the major navigation; 
// it should make the page appear as if the user reloaded the page (do not actually reload the page)


function resetPage(){
	fontCardText.textContent = sampleText;
	fontCardText.style.fontSize = "20px";
	customText.value = "";
	sizeSelector.value = 20;

};

var resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function(){
	resetPage();
});








// // array of font objects to fill font cards: 
// var fonts = [
// 	{
// 		"name": "Roboto",
// 		"creator": "Christian Robertson"
// 	}, 

// 	{
// 		"name": "Gayathri",
// 		"creator": "SMC"
// 	},

// 	{
// 		"name": "Chilanka",
// 		"creator": "SMC"
// 	},

// 	{
// 		"name": "Open Sans",
// 		"creator": "Steve Matteson"
// 	},

// 	{
// 		"name": "Lato",
// 		"creator": "Lukasz Dziedzic"
// 	},

// 	{
// 		"name": "Manjari",
// 		"creator": "Santhosh Thottingal"
// 	},

// 	{
// 		"name": "Montserrat",
// 		"creator": "Julietta Ulanovsky"
// 	},

// 	{
// 		"name": "Roboto Condensed",
// 		"creator": "Christian Robertson"
// 	}
// ];
