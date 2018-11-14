const frisPrice = 2;
const bierPrice = 2.50;
const wijnPrice = 3.50;
const bitterbalPrice8 = 5;
const bitterbalPrice16 = 11;

var frisAmount = 0;
var bierAmount = 0;
var wijnAmount = 0;
var bitterbalAmount8 = 0;
var bitterbalAmount16 = 0;

var drankje = "Niks";



function start(){
	Keuzeorder();
	function Keuzeorder(){
		var keuzeBestelling = prompt("Wat voor bestelling wilt u toevoegen? drankje of snack?");

		if (keuzeBestelling.toLowerCase() == "drankje"){
			bestelling();
		}else if (keuzeBestelling.toLowerCase() == "snack"){
			snack();
		}else {
			alert("Dat hebben wij niet! We hebben wel drankjes en snacks.");
			Keuzeorder();
		}
	}

	function bestelling() {
		keuzeDrankje = prompt("Wat wilt u drinken fris, bier of wijn?");

		if (keuzeDrankje.toLowerCase() == "fris" || keuzeDrankje.toLowerCase() == "bier" || keuzeDrankje.toLowerCase() == "wijn"){
			drankje = keuzeDrankje;
			bestelHoeveelheid();
		}
		else if (keuzeDrankje.toLowerCase() == "stop"){
			betalen();
		} 
		else if (keuzeDrankje.toLowerCase() == "terug"){
			Keuzeorder();


		}else {
			alert("Dat staat niet op het menu!");
			bestelling();
		}
	}

	function betalen(){
			alert("U heeft de bestelling gestopt")
			document.write("REKENING: <br>");
			if (frisAmount > 0){
				document.write("U heeft " + frisAmount + " fris besteld de fris word dan " + frisAmount * frisPrice + " euro <br>");
			}
			if (bierAmount > 0){
				document.write("U heeft " + bierAmount + " bier besteld het bier word dan " + bierAmount * bierPrice + " euro <br>");
			}
			if (wijnAmount > 0){
				document.write("U heeft " + wijnAmount + " wijn besteld de wijn word dan " + wijnAmount * wijnPrice + " euro <br>");
			}
				document.write("<br>")

			if (bitterbalAmount8 > 0){
				document.write("U heeft " + bitterbalAmount8 + " schalen van 8 bitterballen besteld dat word dan " + bitterbalAmount8 * bitterbalPrice8 + " euro <br>");
			}
			if (bitterbalAmount16 > 0){
				document.write("U heeft " + bitterbalAmount16 + " schalen van 16 bitterballen besteld dat word dan " + bitterbalAmount16 * bitterbalPrice16 + " euro <br>");
			}

			var totalPrice = (frisAmount * frisPrice) + (bierAmount * bierPrice) + (wijnAmount *wijnPrice) + (bitterbalAmount8 * bitterbalPrice8) + (bitterbalAmount16 * bitterbalPrice16);

			document.write("<br> TOTAAL BETAALBARE BEDRAG " + totalPrice + ",-");
	}
		
		


	function snack() {
		var hoeveelheidBitterballen = prompt("Hoeveel bitterballen wilt u toevoegen 8 of 16?");

		if (hoeveelheidBitterballen == "8"){
			var hoeveelheidSchalen = parseInt(prompt("Hoeveel schalen wilt u toevoegen?"));
			bitterbalAmount8 += hoeveelheidSchalen
			snack();
		}else if (hoeveelheidBitterballen == "16"){
			var hoeveelheidSchalen = parseInt(prompt("Hoeveel schalen wilt u toevoegen?"));
			bitterbalAmount16 += hoeveelheidSchalen
			snack();
		}else if (hoeveelheidBitterballen == "terug"){
			Keuzeorder();
		}else if (hoeveelheidBitterballen == "stop"){
			betalen();
		}else {
			alert("DAT STAAT NIET OP HET MENU!");
			snack();
		}
	}

	function bestelHoeveelheid() {
		var drinkAmount = parseInt(prompt("Hoeveel " + drankje + " wilt u bestellen?"));

		if (isNaN(drinkAmount)){
			alert("DAT IS GEEN NUMMER!");
			bestelHoeveelheid();
		}

		if (drankje == "fris"){
			frisAmount += drinkAmount;
		}else if (drankje == "bier"){
			bierAmount += drinkAmount;
		}else if (drankje == "wijn"){
			wijnAmount += drinkAmount;
		}
		bestelling();
	}
}



           