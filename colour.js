var numColour=6;
var colour= genenRandomColour(numColour);
var newClass = document.querySelectorAll(".blocks");
var winColour = winnedColour();
var newRgb = document.querySelector("#nRn");
var messageDisplay=document.querySelector("#message");
var head = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtw = document.querySelector("#easyBtw");
var hardBtw = document.querySelector("#hardBtw");


hardBtw.classList.add("selected");
easyBtw.addEventListener("click", easy);
hardBtw.addEventListener("click", hard);
reset.addEventListener("click", reet);
newRgb.textContent = winColour;
for(var i=0;i<newClass.length;i++){
	newClass[i].style.backgroundColor = colour[i];
	newClass[i].addEventListener("click", function(){
		var checking = this.style.backgroundColor;
		if(checking === winColour)
		{
			messageDisplay.textContent = "Correct";
			change(checking);
			head.style.backgroundColor = winColour;
			reset.textContent = "Play Again";
			messageDisplay.classList.add("change");	
		}
		else{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323"
			messageDisplay.classList.add("change");

		}
	});
}
function change(colr){
	for(var i = 0; i< newClass.length; i++){
		newClass[i].style.backgroundColor = colr;
	}
};
function winnedColour(){
	
	var yes = Math.floor(Math.random() * colour.length);
	return colour[yes];
}
function genenRandomColour(num){
	var arr = [];
	for(var i=0 ; i<num; i++){
		arr.push(randomColour());
	}
	return arr;
}
function randomColour(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
function hard(){
	numColour=6;
	hardBtw.classList.add("selected");
	easyBtw.classList.remove("selected");
	colour = genenRandomColour(numColour);
	winColour = winnedColour();
	newRgb.backgroundColor = winColour;
	for(var i=0;i<newClass.length;i++)
	{
		if(colour[i])
		{
			newClass[i].style.backgroundColor = colour[i];
			newClass[i].style.display = "block";
		}
		
	}


}
function easy(){
	numColour=3;
	easyBtw.classList.add("selected");
	hardBtw.classList.remove("selected");
	colour = genenRandomColour(numColour);
	winColour = winnedColour();
	newRgb.backgroundColor = winColour;
	for(var i=0;i<newClass.length;i++)
	{
		if(colour[i])
		{
			newClass[i].style.backgroundColor = colour[i];
		}
		else
		{
			newClass[i].style.display = "none";
		}

	}
}
function reet(){
	colour = genenRandomColour(numColour);
	winColour = winnedColour();
	newRgb.textContent = winColour;
	for(var i=0;i<newClass.length;i++){
	newClass[i].style.backgroundColor = colour[i];
	newClass[i].style.display = "block";
	if(numColour===3)
	{
		if(i>2)
		{
			newClass[i].style.display = "none"
		}
		
	}
	}
	reset.textContent = "New Colour";
	head.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
}