var numsquares = 6;
var colors = generateRandomColors(numsquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displaycolor= document.querySelector("#colordisplay");
var resetButton =  document.querySelector("#reset");
var h1 = document.querySelector("h1");
var msgdisplay=document.querySelector("#messagedisplay");
displaycolor.textContent=pickedColor;
var easyButton= document.querySelector("#easyBtn");
var hardButton= document.querySelector("#hardBtn");


easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numsquares=3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	displaycolor.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}

});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numsquares=6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	displaycolor.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		
			squares[i].style.background=colors[i];
		
			squares[i].style.display="block";
		}
	

});

resetButton.addEventListener("click", function() {
     //generate randome colors
    
    colors = generateRandomColors(numsquares);
      //display tat random generated array in display
     pickedColor = pickColor();
     displaycolor.textContent = pickedColor;

     msgdisplay.textContent="";
     this.textContent="New Game";
     
     for(var i=0; i<squares.length; i++ )
     {
     	squares[i].style.background=colors[i];
     }
     h1.style.background="steelblue";
    
});

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			msgdisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent="PlayAgain!!"

		} else {
			this.style.background = "black";
			msgdisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}