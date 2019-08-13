//create somewhere to put the force directed graph

var svg = d3.select("svg"),
	width = document.documentElement.clientWidth-40,
	height = document.documentElement.clientHeight-40;

$('.my_graph').attr('width',width);
$('.my_graph').attr('height',height);

var svg = d3.select("svg");
	
var radius = 3.25;

//d3.select(window).on('resize.updatesvg', updateWindow);

var myHeight = document.documentElement.clientHeight;
var sibf = document.querySelector('#siblings_family');

sibf.style.setProperty('--element-height', ' ' + (myHeight-382) + 'px');

var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

jQuery(document).ready(function() {

	$('.qtyminus1').css({'font-weight': 'bold'});
	$('.qtyminus1').click(function(e) {
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {
			$('input[name='+fieldName+']').val(1);
		}
	});

	$('.qty1').css({'font-weight': 'bold'});
	$('.qtyplus1').css({'font-weight': 'bold'});
	$('.qtyplus1').click(function(e){
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (!isNaN(currentVal)) {
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			$('input[name='+fieldName+']').val(0);
		}
	});

	$('.qtyminus2').css({'font-weight': 'bold'});
	$('.qtyminus2').click(function(e) {
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {
			$('input[name='+fieldName+']').val(1);
		}
	});

	$('.qty2').css({'font-weight': 'bold'});
	$('.qtyplus2').css({'font-weight': 'bold'});
	$('.qtyplus2').click(function(e){
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (!isNaN(currentVal)) {
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			$('input[name='+fieldName+']').val(1);
		}
	});

	$('.qtyminus3').css({'font-weight': 'bold'});
	$('.qtyminus3').click(function(e) {
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (currentVal > 80) {	
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {
			$('input[name='+fieldName+']').val(80);
		}
	});

	$('.qty3').css({'font-weight': 'bold'});
	$('.qtyplus3').css({'font-weight': 'bold'});
	$('.qtyplus3').click(function(e){
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		if (currentVal < 100) {
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			$('input[name='+fieldName+']').val(100);
		}
	});

});