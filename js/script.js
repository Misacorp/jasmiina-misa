var kaisa_text = "Kaisan ja Jasmiinan ystävyys sai alkunsa jo vuonna 2008, kun he päätyivät samaan soluun. Sinettinsä tämä parivaljakko sai kämppisasumisen myötä ja nyt he ovat kuin paita ja peppu.";
var anniliina_text = "Anniliinan Jasmiina tapasi Mikkelin keskussairaalassa 8.6.1997. Juhlamekko päällä Jasmiina ihasteli pientä siskoaan. Siitä lähtien on leikitty ja riidelty yhdessä ja tänä päivänä he ovat edelleen mitä ylimmät ystävykset.";
var juulia_text = "Jasmiina on tuntenut Juulian niin kauan kuin hän on ollut olemassa. Todellinen sister from another mister.";
var bojko_text = "Bojko ja Misa ystävystyivät pian sen jälkeen, kun Misa muutti maailmalta takaisin Suomeen. Pitkätkään välimatkat eivät ole päässeet murentamaan näiden teknologiafanaatikkojen hioutuneita tiimityöskentelytaitoja.";
var jarka_text = "Jarkan ja Misan tiet kohtasivat Tampereella Misan siviilipalvelusvuoden alussa. Heidät voi usein tavata suoriutumassa elämän haasteista niin lautapelien ääressä kuin lenkkipolullakin.";
var niko_text = "Vuoden Misan kanssa asuneena Nikolla on ainutlaatuista kokemusta Misan todellisesta luonteesta. Misa uskoo kokemuksen olevan hyvää, koska uskalsi pyytää tätä hurjapäätä bestmanikseen.";

$(document).ready(function() {
      $('.parallax').parallax();
});

 $(document).one("scroll", function() {
      $('#kaisanmaili').text(rakennaPosti("-","-","-.-","-"));
      $('#jarkanmaili').text(rakennaPosti("-","-.","-.-","-"));
      $('#kaisanpuhelin').text(rakennaPuh("-","-","- ","- "));
      $('#jarkanpuhelin').text(rakennaPuh("-","-","- ","- "));
    });

$("#parkkilinkki").click(function() {
  $("#click-here-container").hide();
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

$("#parkkilinkki").click(function() {
  $("#paikkatieto").addClass("active");
  $(".collapsible").collapsible({accordion: false});
});