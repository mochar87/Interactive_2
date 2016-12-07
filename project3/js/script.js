$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.fill').addClass('shrink');	

	$('.fill').click(function() {
		$('.fill').toggleClass('circle');
	});	

	// $('.fill').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });	

	// $('#letter').click(function() {
	// 	var letter = $('#letter').clone();
	// 	$('body').append(letter);
	// });	


	// random backgrounds over time
	setInterval(function(){
		$redValue = Math.floor(Math.random()*255);
		$greenValue = Math.floor(Math.random()*255);
		$blueValue = Math.floor(Math.random()*255);	
		$('#about').css(
			'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);

		$('#title').css(
			'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);

		$('#quote').css(
			'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);	

		$('#yellow-e').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);
		

		$('#violet-b').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);

		$('#red-c').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);		

		$('#indigo-a').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);

		$('#green-f').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);

		$('#blue-g').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);

		$('#orange-d').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);

		$('#glow').css(
			//'background-color', 'rgba('+$redValue/2+', 255, '+$greenValue+', 1)'
			'background-color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'

		);
	},500);
	

});