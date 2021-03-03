"use strict";


var restauranger = [];


class Restaurang {

    constructor(namn, adress, avståndAnnexet, avståndCraafords, mat, folk, typ, betyg, img_link, img_alt){

        this.namn = namn; //Namnet på restaurangen
        this.adress = adress; //Address

        this.avståndAnnexet = avståndAnnexet;
        this.avståndCraafords = avståndCraafords;
        //this.avstånd  = avstånd; //avståndet från annexet eller Craafords

        this.mat = mat; //Hur mycket mat på en skala 1-10
        this.folk = folk; //Hur mycket folk på en skala 1-10
        this.typ = typ; //Vilken typ av mat. Pizza, kebab, husman, et.c
        this.betyg = betyg; //Totalt betyg på en skala 1-10
        // this.favorit = favorit; //Bool om restaurangen är en favorit
        this.img_link = img_link;
        this.img_alt = img_alt;
        this.id = namn;

    }
}





function store(){
    var namn = document.getElementById("name").value;
    var adress = document.getElementById("adress").value;
    var avsAnn = parseInt(document.getElementById("avsAnn").value); //Parse later
    var avsCra = parseInt(document.getElementById("avsCra").value); //Parse later
    var mat = parseInt(document.getElementById("mat").value); //Parse later
    var folk = parseInt(document.getElementById("folk").value); //Parse later
    var typ = document.getElementById("typ").value;
    var betyg = document.getElementById("betyg").value;
    var imgLänk = document.getElementById("imgLänk").value;
    var imgAlt = document.getElementById("imgAlt").value;
    

    restauranger.push(new Restaurang(namn, adress, avsAnn, avsCra, mat, folk, typ, betyg, imgLänk, imgAlt));
    //localStorage.setItem(test.namn, JSON.stringify(test));


    console.log("logged");
    console.log(restauranger); 


    for (var i = 0; i < restauranger.length; i++) {
	console.log(i);
	var temp_var = localStorage.getItem(restauranger[i].namn);
	var temp_var2 = JSON.parse(temp_var);

	console.log(temp_var2);

    }


    
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


