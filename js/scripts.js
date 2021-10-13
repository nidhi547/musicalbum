$(document).ready(function() {
    // form animation
    $("#nameClick, #phoneClick, #emailClick, #messageClick").click(function() {
        var string = $(this).attr("id");
        var stringNoClick = string.replace("Click","");
        var stringNohash = stringNoClick.replace("#","");
        $("." + stringNohash + "Slide").slideToggle(100);
    });

    // navigation animation
    $("#navButton").click(function() {
        $("#nav").show();
        $("#nav").animate({width: "125px"}, 100);
        $("#navButton img").hide();
    });

    // navigation button highlight
    $("#navButton").hover(function() {
        $(this).css("background-color","rgba(150, 150, 150, 0.3)");
    },
    function() {
        $(this).css("background-color","rgba(0,0,0,0.0)");
    });

    // close navigation bar animation
    $("#nav").mouseleave(function() {   
        $(this).animate({width: '0px'}, 100, function() {
            $("#navButton img").show();
            $(this).hide();
        });
    });

    // menu bar highlight contents
    $("#navAudio,#navVideo,#navContact").hover(function() {
        $(this).css("background-color","rgba(150, 150, 150, 0.3)")
        $(this).css("border-radius","5px");
    },function() {
        $(this).css("background-color","rgba(150, 150, 150, 0.0)")
    });

    // slide down animation for available songs
    $(".hover1,.hover2,.hover3").hover(function() {
        var string = $(this).attr("class");
        var number = string.replace("hover","");
        $(".slide" + number).slideDown(100);
    },
    function() {
        var string = $(this).attr("class");
        var number = string.replace("hover","");
        $(".slide" + number).slideUp(100);
    });

    // tab switching animation
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});