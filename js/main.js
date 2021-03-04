"use strict";

const LOCAL_STORAGE_KEY_NTILH = "app.rests";


let annexet = true; //Sets annexet to false. i.e, Craafords is the default starting location.
var list = []; //List that contains all the restaurant objects


//Restaurant class 
class Restaurang {

	constructor(namn, adress, avståndAnnexet, avståndCraafords, mat, folk, typ, betyg, img_link, img_alt, id) {

		this.namn = namn; //Namnet på restaurangen
		this.adress = adress; //Adress

		this.avståndAnnexet = avståndAnnexet;
		this.avståndCraafords = avståndCraafords;
		this.avstånd = avståndAnnexet; //avståndet från annexet eller Craafords

		this.mat = mat; //Hur mycket mat på en skala 1-10
		this.folk = folk; //Hur mycket folk på en skala 1-10
		this.typ = typ; //Vilken typ av mat. Pizza, kebab, husman, et.c
		this.betyg = betyg; //Totalt betyg på en skala 1-10
		// this.favorit = favorit; //Bool om restaurangen är en favorit
		this.img_link = img_link; // 
		this.img_alt = img_alt;
		this.id = id; //Should be removed later, the id is essentially the same as name.
		this.createRest(); //adds the restaurant object to html
	}

	//getter for getting the object name
	get getName() {
		return this.namn;
	}


	//Checks wether the user is at craafords och annexet and sets "avstånd" accordingly
	setAvstånd(annexet) {
		if (annexet == true) {
			this.avstånd = this.avståndAnnexet;
			document.getElementById(this.id).innerHTML = this.avstånd;
		} else {
			this.avstånd = this.avståndCraafords;
			document.getElementById(this.id).innerHTML = this.avstånd;
		}
	}

	//This method creates the restaurant object in the html
	createRest() {
		//this.id++;
		document.getElementById("0").innerHTML += "<div class='restaurang'> <div> <h3>" + this.namn + "</h3> <a href='" + this.adress + "' >Adress</a> <p id='" + this.id + "'>" + this.avstånd + "</p>  <p>" + this.mat + "</p> <p>" + this.folk + "</p> </div> <div> <img src=' " + this.img_link + "  ' alt=' " + this.img_alt + "  '/> </div>  </div>    ";
	}

}



//Is triggered by the press of the button on the top of the webpage. Toggles the location of the user between "annexet" and "crafoords"
function toggleAnnexet() {
	if (annexet == true) {
		annexet = false;
		document.getElementById("loc_button").innerHTML = "Jag är på annexet";
	} else {
		annexet = true;
		document.getElementById("loc_button").innerHTML = "Jag är på craafords";
	}
	var i;
	for (i = 0; i < list.length; i++) {
		list[i].setAvstånd(annexet);
		//console.log(list[i]);
	}

}

//Sorts the restaurants depending on what the user chooses
function sortRest(input) {

	//Removes all the Restaurant code in index.html so it can be created later
	document.getElementById("0").innerHTML = "";


	////////////////////////////////////////////


	switch (input) {

		case "alpT":
			//alphabetically A on Top

			list.sort((a, b) => {

				let na = a.namn.toLowerCase(),
					nb = b.namn.toLowerCase();

				if (na < nb) {
					return -1;
				}
				if (na > nb) {
					return 1;
				}
				return 0;

			});


			break;
		case "alpB":
			//alphabetically A on bot

			list.sort((a, b) => {

				let na = a.namn.toLowerCase(),
					nb = b.namn.toLowerCase();

				if (na < nb) {
					return 1;
				}
				if (na > nb) {
					return -1;
				}
				return 0;

			});


			break;
		case "avsT":
			//avstånd, kortast avstånd på toppen

			list.sort((a, b) => {

				return a.avstånd - b.avstånd;

			});

			break;
		case "avsB":
			//avstånd, kortast avstånd på botten

			list.sort((a, b) => {

				return b.avstånd - a.avstånd;

			});

			break;
		case "folT":
			//folk, färst på toppen

			list.sort((a, b) => {

				return a.folk - b.folk;

			});

			break;
		case "folB":
			//Folk, färst på botten

			list.sort((a, b) => {

				return b.folk - a.folk;

			});


			break;
		case "matT":
			//mat, mest mat på toppen

			list.sort((a, b) => {

				return b.mat - a.mat;

			});

			break;
		case "matB":
			//mat, mest mat på botten

			list.sort((a, b) => {

				return a.mat - b.mat;

			});

			break;
	}



	var i;
	for (i = 0; i < list.length; i++) { //Loops through all the restaurants.

		//console.log(list[i].getName);

		//Creates the Restaurant code in index.html in the sorted order
		list[i].createRest();

		//console.log(list[i]);
	}



}

//Gets called when the user chooses a sorting option. 
function changed() {

	var sortSelect = document.getElementById("sort");
	var selected = sortSelect.options[sortSelect.selectedIndex].value;

	if (selected != "def") {
		sortRest(selected);
	}



}


//Add all the hardcoded restaurants between the two lines
//=============================================================================================================================


//Constructs mcdonalds
let mcdonalds = new Restaurang("Mcdonalds", "http://google.com", 250, 600, 6, 9, "Hamburgare", 5, "./img/mcdonalds.jpeg", "bild på mcdonalds", "mcdonalds");
list.push(mcdonalds); //Pushes the object to the "list" list

//Constructs falafelkungen
let falafelKungen = new Restaurang("Falafelkungen", "http://google.com", 500, 1000, 9, 9, "Kebab", 7, "./img/falafelkungen", "bild på falafelkungen", "falafel");
list.push(falafelKungen); //Pushes the object to the "list" list


//Constructs nybergs
let nybergs = new Restaurang("Nybergs Konditori", "http://biltema.se", 50, 300, 8, 5, "Konditori", 9, "./img/nybergs", "bild på nybergs koditori", "nybergs");
list.push(nybergs); //Pushes the object to the "list" list

//Constructs subway
let subway = new Restaurang("Subway", "http://youtube.com",  100, 400, 6, 10, "Mackor", 7, "./img/subway.jpeg", "bild på subway", "subway");
list.push(subway); //Pushes the object to the "list" list



//=============================================================================================================================

//Fixes bug where the wrong distance is displayed if you dont manually pick a location.
//Should fix later if I have the time. 
toggleAnnexet();



//Extremely messy code, but it works i guess. Runs when the page is initialized.
//Adds all restaurant objects in localstorage. 
let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];

if (rests.length != 0) {

	for (var i = 0; i < rests.length; i++) {
		var list_temp_var = JSON.parse(rests[i]);
		// console.log(list_temp_var);

		list.push(new Restaurang(list_temp_var.name, list_temp_var.adress,  list_temp_var.avståndAnnexet, list_temp_var.avståndCraafords, list_temp_var.mat, list_temp_var.folk, list_temp_var.typ, list_temp_var.betyg, list_temp_var.img_link, list_temp_var.img_alt, list_temp_var.name));

	}

	console.log(list_temp_var);

	// console.log(list_temp_var.name, list_temp_var.adress, 0, list_temp_var.avståndAnnexet, list_temp_var.avståndCraafords, list_temp_var.mat, list_temp_var.folk, list_temp_var.typ, list_temp_var.betyg, list_temp_var.img_link, list_temp_var.img_alt, list_temp_var.name);

}


