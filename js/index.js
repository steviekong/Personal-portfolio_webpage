
$('.b1').click(function(){
	$('.b1').css('background-color','#eceff1');
	$('.b2').css('background-color','');
	$('.b3').css('background-color','');
	
});
$('.b2').click(function(){
	$('.b2').css('background-color','#eceff1');
	$('.b1').css('background-color','');
	$('.b3').css('background-color','');
});
$('.b3').click(function(){
	$('.b3').css('background-color','#eceff1');
	$('.b1').css('background-color','');
	$('.b2').css('background-color','');
});
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about-hero').position().top){
        $('.b1').css('background-color','#eceff1');
	$('.b2').css('background-color','');
	$('.b3').css('background-color','');
    }
});
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about-hero').position().top){
        $('.b1').css('background-color','#eceff1');
	$('.b2').css('background-color','');
	$('.b3').css('background-color','');
	$('#brand').text('About Me');
    }
	if($(this).scrollTop()>=$('#second-scroll').position().top){
        $('.b2').css('background-color','#eceff1');
	$('.b1').css('background-color','');
	$('.b3').css('background-color','');
	$('#brand').text('Portfolio');	
    }
	if($(this).scrollTop()>=1000){
        $('.b3').css('background-color','#eceff1');
	$('.b1').css('background-color','');
	$('.b2').css('background-color','');
	$('#brand').text('Contact');	
    }
});