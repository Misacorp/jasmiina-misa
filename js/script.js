 $(document).ready(function(){
      $('.parallax').parallax();
    });

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

/*
$(document).ready(function() {
 if($(window).width() < 600) 
  // This will remove the tooltip functionality for the buttons on this page
  $('.tooltipped').tooltip('remove');
 }); */

$("#infolista").click(function() {
	$("#click-here-container").hide();
});

// if ($(window).width() > 600) {
//     $('#jarka-contact-image').addClass('circle');
// } else {
//     $('#jarka-contact-image').removeClass('circle');
// }

// if ($(window).width() > 600) {
//     $('#kaisa-contact-image').addClass('circle');
// } else {
//     $('#kaisa-contact-image').removeClass('circle');
// }