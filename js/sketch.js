var size = 16;
var boxSize = Math.floor(960/(size));
//var $row = $('<div />', {class: 'row'}); Obsolete
var $box = $('<div />', {class: 'box'});

$(document).ready(function() {
	drawGrid(size);
	draw();
	clearGrid();
});

function clearGrid() {
	$('.box').css('background', '#faebd7');
}

function draw() {
	$('div.box').hover(function() {
		$(this).css('background', '#8ec252');
	});
}

function newSize() {
	var newSize = prompt('Enter a number between 0 and 65.');
	if (newSize < 1 || newSize > 64) {
		alert('That is definitely not between 0 and 65!');
	}
	else {
		drawGrid(newSize);
	}
}

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

function gridLines() {
	var checked = $('#lines:checked').val();
	if(checked){
		$('.box').css('border', '1px solid #D3D3D3');
	}
	else {
		$('.box').css('border', 'none');
	}
}