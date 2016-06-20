var text_kaisa = "Kaisa on Jasmiinan pitkäaikainen kämppis ja vielä pidempiaikainen ystävä."

$(document).ready(function() {
      $('.parallax').parallax();
});

 $(document).one("scroll", function() {
      $('#kaisanmaili').text(rakennaPosti("kuismanen","kaisak","il.com","gma"));
      $('#jarkanmaili').text(rakennaPosti("kiihamaki","jarka.","l.com","gmai"));
      $('#kaisanpuhelin').text(rakennaPuh("99","92","320 ","050 "));
      $('#jarkanpuhelin').text(rakennaPuh("97","39","847 ","040 "));
    });

$("#infolista").click(function() {
	$("#click-here-container").hide();
});

var rakennaPosti = function(username2, username1, domain2, domain1) {
  var posti = username1+username2+"@"+domain1+domain2;
  return posti;
}

var rakennaPuh = function(osa4, osa3, osa2, osa1) {
  var puh = osa1 + osa2 + osa3 + osa4;
  return puh;
}

$("#kaisa-button").click(function() {
  $("#kaaso-bestman-text").text(text_kaisa);
});