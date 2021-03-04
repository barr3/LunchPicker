"use strict";

const LOCAL_STORAGE_KEY_NTILH = "app.rests";


let annexet = true; //Sets annexet to false. i.e, Craafords is the default starting location.
var list = []; //List that contains all the restaurant objects


//Restaurant class 
class Restaurang {

	constructor(name, adress, distAnnexet, distCrafoords, food, people, type, grade, img_link, img_alt) {

		this.name = name; //Namnet på restaurangen
		this.adress = adress; //Adress

		this.distAnnexet = distAnnexet;
		this.distCrafoords = distCrafoords;
		this.dist = distAnnexet; //avståndet från annexet eller Craafords

		this.food = food; //Hur mycket mat på en skala 1-10
		this.people = people; //Hur mycket folk på en skala 1-10
		this.type = type; //Vilken typ av mat. Pizza, kebab, husman, et.c
		this.grade = grade; //Totalt betyg på en skala 1-10
		// this.favorit = favorit; //Bool om restaurangen är en favorit
		this.img_link = img_link; // 
		this.img_alt = img_alt;
		this.createRest(); //adds the restaurant object to html
	}

	//getter for getting the object name
	get getName() {
		return this.name;
	}


	//Checks wether the user is at craafords och annexet and sets "avstånd" accordingly
	setDist(annexet) {
		if (annexet == true) {
			this.dist = this.distAnnexet;
			document.getElementById(this.name).innerHTML = "Avstånd till restaurangen: " + this.dist + " m";
		} else {
			this.dist = this.distCrafoords;
			document.getElementById(this.name).innerHTML = "Avstånd till restaurangen: " + this.dist + " m";
		}
	}

	//This method creates the restaurant object in the html
	createRest() {
		//this.id++;
		document.getElementById("0").innerHTML += "<div class='restaurang'> <div> <h3>" + this.name + "</h3> <a target=_blank  href='" + this.adress + "' >Adress</a> <p id='" + this.name + "'> Avstånd till restaurangen:  " + this.dist + " m</p>  <p>Mängd mat : " + this.food + "/10</p> <p>Mängd folk : " + this.people + "/10</p> <p>Typ av mat: " + this.type + "</div> <div> <img src=' " + this.img_link + "  ' alt=' " + this.img_alt + "  '/> </div>  </div>    ";
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
		list[i].setDist(annexet);
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

				let na = a.name.toLowerCase(),
					nb = b.name.toLowerCase();

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

				let na = a.name.toLowerCase(),
					nb = b.name.toLowerCase();

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
			//distance, shortest on top

			list.sort((a, b) => {

				return a.dist - b.dist;

			});

			break;
		case "avsB":
			//distance, shortest on the bottom

			list.sort((a, b) => {

				return b.dist - a.dist;

			});

			break;
		case "folT":
			//amount of people, fewest on the top

			list.sort((a, b) => {

				return a.people - b.people;

			});

			break;
		case "folB":
			//amount of people, fewest on the bottom

			list.sort((a, b) => {

				return b.people - a.people;

			});


			break;
		case "matT":
			//amount of food, most food on top

			list.sort((a, b) => {

				return b.food - a.food;

			});

			break;
		case "matB":
			//amount of food, most food on the bottom

			list.sort((a, b) => {

				return a.food - b.food;

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

	//Makes sure that the user has selected a sorting option
	if (selected != "def") {
		sortRest(selected);
	}



}

//Fixes bug where the wrong distance is displayed if you dont manually pick a location.
//Should fix later if I have the time. 
toggleAnnexet();

//Add all the hardcoded restaurants between the two lines
//=============================================================================================================================


//Constructs mcdonalds
let mcdonalds = new Restaurang("Mcdonalds", "https://goo.gl/maps/6fdtrn884mjWvKSD6", 250, 600, 6, 9, "Hamburgare", 5, "./img/mcdonalds.jpeg", "bild på mcdonalds", "mcdonalds");
list.push(mcdonalds); //Pushes the object to the "list" list

//Constructs falafelkungen
let falafelKungen = new Restaurang("Falafelkungen", "https://goo.gl/maps/GTb8C43y52GAwtr66", 500, 1000, 9, 9, "Kebab", 7, "./img/falafelkungen", "bild på falafelkungen", "falafel");
list.push(falafelKungen); //Pushes the object to the "list" list


//Constructs nybergs
let nybergs = new Restaurang("Nybergs Konditori", "https://goo.gl/maps/5b3GcYfnWdchVHxo8", 50, 300, 8, 5, "Konditori", 9, "./img/nybergs", "bild på nybergs koditori", "nybergs");
list.push(nybergs); //Pushes the object to the "list" list

//Constructs subway
let subway = new Restaurang("Subway", "https://goo.gl/maps/MbfLd3L9kSusRUj66",  100, 400, 6, 10, "Mackor", 7, "./img/subway.jpeg", "bild på subway", "subway");
list.push(subway); //Pushes the object to the "list" list



//=============================================================================================================================

//Extremely messy code, but it works i guess. Runs when the page is initialized.
//Adds all restaurant objects in localstorage. 
let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];

if (rests.length != 0) {

	for (var i = 0; i < rests.length; i++) {
		var list_temp_var = JSON.parse(rests[i]);
		// console.log(list_temp_var);

		list.push(new Restaurang(list_temp_var.name, list_temp_var.adress,  list_temp_var.distAnnexet, list_temp_var.distCrafoords, list_temp_var.food, list_temp_var.people, list_temp_var.type, list_temp_var.grade, list_temp_var.img_link, list_temp_var.img_alt, list_temp_var.name));

	}

	// console.log(list_temp_var);

	// console.log(list_temp_var.name, list_temp_var.adress, 0, list_temp_var.avståndAnnexet, list_temp_var.avståndCraafords, list_temp_var.mat, list_temp_var.folk, list_temp_var.typ, list_temp_var.betyg, list_temp_var.img_link, list_temp_var.img_alt, list_temp_var.name);

}


