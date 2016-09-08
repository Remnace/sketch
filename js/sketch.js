var rows = 16;
var columns = 16;
var $row = $('<div />', {class: 'row'});
var $box = $('<div />', {class: 'box'});

$(document).ready(function() {
	for (var i = 0; i < columns; i++) {
		$row.append($box.clone());
	}
	for (var i = 0; i < rows; i++) {
		$('#grid').append($row.clone());
	}

	$('div.box').hover(function() {
		$(this).css('background', '#8ec252');
	});
});

function clearGrid() {
	$('.box').css('background', 'white');
}