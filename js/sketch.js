var size = 16; //Variable which stores the dimension of grid.
var boxSize = Math.floor(960/(size)); //Stores size of each individual grid box.
var $box = $('<div />', {class: 'box'});


//Initial 
$(document).ready(function() {
	drawGrid(size);
	draw();
	clearGrid();
});

//Clears the grid back to default color.
function clearGrid() {
	$('.box').css('background', '#faebd7');
}

//Changes background color of a grid box when hovered over with mouse.
function draw() {
	$('div.box').hover(function() {
		$(this).css('background', 'black');
	});
}

//Gets a new size for the grid and calls the drawGrid function with the new size.
function newSize() {
	var newSize = prompt('Enter a number between 0 and 129.');
	if (newSize < 1 || newSize > 128) {
		alert('That is definitely not between 0 and 129!');
	}
	else {
		drawGrid(newSize);
	}
}

//Draws the grid based on a given size.
function drawGrid(sizeIn) {
	var boxDivs = [];
	size = sizeIn;
	boxSize = Math.floor(960/size);

	$('#grid').off();
	$('#grid').html('');

	$box = "<div class='box' style='width:" + boxSize + "px; height:" + boxSize+"px;'></div>";
	$('#grid').css('width', boxSize*sizeIn);
	for (var i = 0; i < sizeIn * sizeIn; i++){
		boxDivs[i] = $box;
	}
	$('#grid').append(boxDivs.join(''));

	clearGrid();
	draw();
	gridLines();
}

//Checks if grid lines are enabled.
function gridLines() {
	var checked = $('#lines:checked').val();
	if(checked){
		$('.box').css('border', '1px solid #D3D3D3');
	}
	else {
		$('.box').css('border', 'none');
	}
}

//Changes background color of a box to a random color.
function drawRandom() {
	$('div.box').hover(function() {
		$(this).css('background', randomColor());
	});
}

//Generates a random color
function randomColor() {
	var hexChars = '0123456789ABCDEF'.split('');
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += hexChars[Math.floor(Math.random()*16)];
	}

	return color;
}