$(function() {
	//ADD AND REMOVE COLOR TO BOXES ON CLICK
    $('.grade-box').click(function() {
    	var clickedBox = this.id;
    	console.log(clickedBox);
        $('.grade-box.clicked').removeClass('clicked');
        $('#' + clickedBox).addClass('clicked');
        $('.choose-tech-access').css('display','block');
    });

    $('.tech-access-box').click(function() {
    	var clickedBox = this.id;
    	console.log(clickedBox);
        $('.tech-access-box.clicked').removeClass('clicked');
        $('#' + clickedBox).addClass('clicked');
        $('.schedules').css('display','block');
    });

    $('.box').click(function(){
    	if ($('#grade-one').hasClass('clicked') && $('#tech-one').hasClass('clicked')) {
    		$('.schedule-box').css('display','none');
        	$('#schedule-one').css('display','block'),
        	$('#schedule-two').css('display','block');
        } else if ($('#grade-one').hasClass('clicked') && $('#tech-two').hasClass('clicked')) {
        	$('.schedule-box').css('display','none');
        	$('#schedule-three').css('display','block'),
        	$('#schedule-four').css('display','block');
        } else if ($('#grade-two').hasClass('clicked') && $('#tech-one').hasClass('clicked')) {
        	$('.schedule-box').css('display','none');
        	$('#schedule-five').css('display','block'),
        	$('#schedule-six').css('display','block');
        } else if ($('#grade-two').hasClass('clicked') && $('#tech-two').hasClass('clicked')) {
        	$('.schedule-box').css('display','none');
        	$('#schedule-seven').css('display','block'),
        	$('#schedule-eight').css('display','block');
        } else if ($('#grade-three').hasClass('clicked') && $('#tech-one').hasClass('clicked')) {
        	$('.schedule-box').css('display','none');
        	$('#schedule-nine').css('display','block'),
        	$('#schedule-ten').css('display','block');
        } else if ($('#grade-three').hasClass('clicked') && $('#tech-two').hasClass('clicked')) {
        	$('.schedule-box').css('display','none');
        	$('#schedule-eleven').css('display','block'),
        	$('#schedule-twelve').css('display','block');
        }
    })

    $('.fa-repeat').click(function(){
    	$('.grade-box.clicked').removeClass('clicked');
    	$('.tech-access-box.clicked').removeClass('clicked');
        $('.schedules, .choose-tech-access').css('display','none');
    });

});