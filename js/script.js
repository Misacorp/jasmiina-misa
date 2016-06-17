 $(document).ready(function(){
      $('.parallax').parallax();
      $('#jarkanmaili').text(rakennaPosti("kiihamaki","jarka.","l.com","gmai"))
      $('#kaisanmaili').text(rakennaPosti("kuismanen","kaisak","il.com","gma"))
    });

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

$("#infolista").click(function() {
	$("#click-here-container").hide();
});

var rakennaPosti = function(username2, username1, domain2, domain1) {
  var posti = username1+username2+"@"+domain1+domain2;
  return posti;
}