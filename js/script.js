var kaisa_text = "Kaisa on Jasmiinan pitkäaikainen kämppis ja vielä pidempiaikainen ystävä.";
var anniliina_text = "Anniliina on Jasmiinan sisko ja tietysti tärkeä ihminen!!!";
var juulia_text = "Kuopio sistas at it again.";
var bojko_text = "Lukuisten onnistuneiden Team Fortress Medic combojen jälkeen Bojkosta tuli Misan #1 luottomies.";
var jarka_text = "Aina pelissä, aina lenkillä. Jarka ja Misa perustivat #ovipeelot IRC-kanavan ja tuovat sitä kautta neljä ihmistä yhteen murehtimaan elämän julmuutta.";
var niko_text = "Nikon ja Misan yhteinen kämmpisvuosi oli herkkä ja intiimi.";

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

$(".person-button").click(function() {
  var nimi = $(this).closest("img").attr("id");
  nimi = nimi.replace("-button","_text");
  $("#kaaso-bestman-text").text(window[nimi]);
});