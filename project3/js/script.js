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
		$('.fill').css(
			'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
		);
	},500);
	

});