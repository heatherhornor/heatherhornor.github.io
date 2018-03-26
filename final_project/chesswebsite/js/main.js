
$('.clubQ1').on('click', function () {
	$('.modal-background1').css("display", "flex").hide().fadeIn();
});

$('.clubQ2').on('click', function () {
	$('.modal-background2').css("display", "flex").hide().fadeIn();
});

$('#close1').on('click', function () {
	$('.modal-background1').fadeOut();
});

$('#close2').on('click', function () {
	$('.modal-background2').fadeOut();
});

$('#arrowbutton').on('click', function() {
  $(".bigNav").slideToggle(300);
});

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

  if(distanceScrolled> 100) {
    $('header').addClass('littleHead');
    $('nav').addClass('navOpac');
    $('.container1').addClass('containerSlide');
  }
});
