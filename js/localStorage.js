"use strict";

const LOCAL_STORAGE_KEY_NTILH = "app.rests";

//Loads in the restaurant objects already stored in local storage.
let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];

//Takes the values put in the HTML form and sends them to local storage. 
function store() {

	//Takes the values of the fields and assigns them to an appropriate temp variable.
	var temp_name = document.getElementById("name").value;
	var temp_adress = document.getElementById("adress").value;
	var temp_avsAnn = parseInt(document.getElementById("avsAnn").value); //Parse later
	var temp_avsCra = parseInt(document.getElementById("avsCra").value); //Parse later
	var temp_mat = parseInt(document.getElementById("mat").value); //Parse later
	var temp_folk = parseInt(document.getElementById("folk").value); //Parse later
	var temp_typ = document.getElementById("typ").value;
	var temp_betyg = document.getElementById("betyg").value;
	var temp_imgLänk = document.getElementById("imgLänk").value;
	var temp_imgAlt = document.getElementById("imgAlt").value;

	//Creates a object with the values given. 
	var obj = { name: temp_name, adress: temp_adress, avståndAnnexet: temp_avsAnn, avståndCraafords: temp_avsCra, mat: temp_mat, folk: temp_folk, typ: temp_typ, betyg: temp_betyg, img_link: temp_imgLänk, img_alt: temp_imgAlt };

	//Makes the object a JSON object.
	var temp_rest = JSON.stringify(obj);

	//Pushes the JSON object to the rests array
	rests.push(temp_rest);
	
	//Pushes the rests array to local storage. 
	localStorage.setItem(LOCAL_STORAGE_KEY_NTILH, JSON.stringify(rests));
	
}

//Function name pretty much explains itself.
function clearRestaurants(){

	rests = [];
	localStorage.setItem(LOCAL_STORAGE_KEY_NTILH, JSON.stringify(rests));
	
}
