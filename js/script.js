document.querySelector('#contact-form').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.elements.name.value = '';
	e.target.elements.email.value = '';
	e.target.elements.message.value = '';
  });
  
  //Reference to the HTML body tag
let  btn = document.getElementById("btn");

// List of random colors to display
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// The function that runs when our button is clicked
function changeBackgroundColor() {
  // Pick a random color from the list
  let randomColorPicker = colorArray[Math.floor(Math.random() * colorArray.length)];
  // target the body and set the new random background color
  btn.style.backgroundColor = randomColorPicker;
}