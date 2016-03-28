$(document).ready(function(){
   $(".button-collapse").sideNav();

   $('ul.tabs').tabs();

   $('.slider').slider({
      full_width: true,
      interval:5000,
      transition:800,
      indicators: false
    });

   new WOW().init();

   $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: 0, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  }
);


  // menu fixed

  $(window).scroll(function() {

  	var st = $(this).scrollTop() /16;

  	$(".parallax__more").css({
  		"transform" : "translate3d(0px, " + st  + "%, .01px)",
  		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
  	});




  });




});
