$(function() {
	init();
});

function init() {
	var $etchPanel = $('<div class="etchPanel">&nbsp;</div>');
	createCanvas();
	mouseDraw();
}

function createCanvas() {
	for (var i = 0; i < 64; i++) {
		$etchPanel = $('<div class="etchPanel">&nbsp;</div>');
		$('#container').append($etchPanel);
	};
}

function mouseDraw() { 
	$('#container').on('mouseenter', '.etchPanel', function() {
		$(this).fadeTo(0, 0);
	});
	$('#container').on('mouseleave', '.etchPanel', function() {
		$(this).fadeTo(400, 1);
	});
}
