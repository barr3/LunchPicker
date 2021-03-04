"use strict";


//var restauranger = [];

const LOCAL_STORAGE_KEY_NTILH = "app.rests";

let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];

console.log(rests);


//remove later
// class Restaurang {

// 	constructor(namn, adress, avståndAnnexet, avståndCraafords, mat, folk, typ, betyg, img_link, img_alt) {

// 		this.namn = namn; //Namnet på restaurangen
// 		this.adress = adress; //Address

// 		this.avståndAnnexet = avståndAnnexet;
// 		this.avståndCraafords = avståndCraafords;
// 		//this.avstånd  = avstånd; //avståndet från annexet eller Craafords

// 		this.mat = mat; //Hur mycket mat på en skala 1-10
// 		this.folk = folk; //Hur mycket folk på en skala 1-10
// 		this.typ = typ; //Vilken typ av mat. Pizza, kebab, husman, et.c
// 		this.betyg = betyg; //Totalt betyg på en skala 1-10
// 		// this.favorit = favorit; //Bool om restaurangen är en favorit
// 		this.img_link = img_link;
// 		this.img_alt = img_alt;
// 		this.id = namn;

// 	}
// }


function test() {
	console.log(restauranger);

	// for (var i = 0; i < restauranger.length; i++) {
	// 	console.log(i);
	// 	console.log(restauranger[i]);
	// }

}


function store() {

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
	

	// restauranger.push(new Restaurang(namn, adress, avsAnn, avsCra, mat, folk, typ, betyg, imgLänk, imgAlt));
	//localStorage.setItem(test.namn, JSON.stringify(test));

	var obj = { name: temp_name, adress: temp_adress, avståndAnnexet: temp_avsAnn, avståndCraafords: temp_avsCra, mat: temp_mat, folk: temp_folk, typ: temp_typ, betyg: temp_betyg, img_link: temp_imgLänk, img_alt: temp_imgAlt };

	// console.log(restMidMan.namn);
	// var myJSON = JSON.stringify(restMidMan);

	
	
	//console.log(JSON.stringify(restMidMan));

	// console.log(namn);

	// var obj = {name : "barre", age: 17, city : "Stockholm"};


	var temp_rest = JSON.stringify(obj);

	rests.push(temp_rest);

	console.log(rests);
	localStorage.setItem(LOCAL_STORAGE_KEY_NTILH, JSON.stringify(rests));

	// console.log(restauranger);


	
	//localStorage.setItem(restauranger, JSON.stringify(restauranger));

	//var korv = localStorage.getItem();

	// let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];

	// console.log(rests);
	
	// console.log("hej hej");
	// console.log(korv);
	
  
	// var temp_var = localStorage.getItem(restauranger);
	// var temp_var2 = JSON.parse(temp_var);

	// console.log(temp_var2);





	//Don't know about this
	// var JSONMiddleMan = '"interChange" : [ '+
	// 	'{ "namn" : "", "adress" : "", "avsAnn" : "", "avsCra" : "", "mat": "" }'

}


// for (var i = 0; i < restauranger.length; ++i) {
//     console.log(i);
//     var temp_var = localStorage.getItem(i.name);
//     var temp_var2 = JSON.parse(temp_var);
//     console.log("Restaurangen är: ");
//     console.log(temp_var2);

// } 


// function storeRestaurants(){
// 	console.log(rests);

// 	localStorage.setItem(LOCAL_STORAGE_KEY_NTILH, JSON.stringify(rests));
	
// }


function clearRestaurants(){

	rests = [];
	localStorage.setItem(LOCAL_STORAGE_KEY_NTILH, JSON.stringify(rests));
	
}
