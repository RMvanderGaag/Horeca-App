const fris = 2;
const bier = 3.50;
const wijn = 4.50;

var frisAmount = 0;
var bierAmount = 0;
var wijnAmount = 0;

var drankje = "Niks";


function bestelling() {
	drankje = prompt("Welke bestelling wilt u toevoegen? Fris, Bier of Wijn?");

	if (drankje.toLowerCase() == "fris" || drankje.toLowerCase() == "bier" || drankje.toLowerCase() == "wijn") {
		document.write("Te betalen " + betalen(frisAmount, fris) + " euro <br>");
		document.write("Te betalen " + betalen(bierAmount, bier) + " euro <br>");
		document.write("Te betalen " + betalen(wijnAmount, wijn) + " euro <br>");
	
	if (drankje.toLowerCase() == "stop") {
			alert ("U heeft de bestelling geanuleerd!");
		}
		hoeveelheid();
	}
}

function hoeveelheid() {
	var quantity = prompt("Hoeveel " + drankje.toLowerCase() + " wilt u bestellen?");
	if (drankje.toLowerCase() == "fris") {
		frisAmount + quantity;
	}
	if (drankje.toLowerCase() == "bier") {
		bierAmount + quantity;
	}
	if (drankje.toLowerCase() == "wijn") {
		wijnAmount + quantity;
	}
	bestelling();

}
	
function betalen(a , b) {
	return a * b;
}

	bestelling();