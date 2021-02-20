"use strict";


//Might use local storage later for favorites
/*
const LOCAL_STORAGE_KEY_NTILH = "app.rests.advanced";

let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];
*/

let annexet = false;
var list = []

class Restaurang {

    constructor(namn, adress, avstånd ,avståndAnnexet, avståndCraafords, mat, folk, typ, betyg, img_link, img_alt, id){

        this.namn = namn; //Namnet på restaurangen
        this.adress = adress; //Address

        this.avståndAnnexet = avståndAnnexet;
        this.avståndCraafords = avståndCraafords;
        this.avstånd  = avstånd; //avståndet från annexet eller Craafords

        this.mat = mat; //Hur mycket mat på en skala 1-10
        this.folk = folk; //Hur mycket folk på en skala 1-10
        this.typ = typ; //Vilken typ av mat. Pizza, kebab, husman, et.c
        this.betyg = betyg; //Totalt betyg på en skala 1-10
        // this.favorit = favorit; //Bool om restaurangen är en favorit
        this.img_link = img_link;
        this.img_alt = img_alt;
        this.id = id

    }

    //Kollar om man är på annexet eller craafords och sätter avstånd beroende på det
    setAvstånd(annexet){
        if (annexet == true) {
            this.avstånd = this.avståndAnnexet;
            document.getElementById(this.id).innerHTML= this.avstånd;
        } else {
            this.avstånd = this.avståndCraafords;
            document.getElementById(this.id).innerHTML= this.avstånd;
        }
    }



    //namn, adress, avstånd, mat, folk, img_link, img_alt
    createRest(){
        //this.id++;
        document.getElementById("0").innerHTML += "<div class='restaurang'> <div> <h3>" + this.namn + "</h3> <a href='" + this.adress + "' >Adress</a> <p id='"+ this.id +"'>"+ this.avstånd  + "</p>  <p>"+ this.mat +"</p> <p>"+ this.folk  +"</p> </div> <div> <img src=' "+ this.img_link  +"  ' alt=' "+ this.img_alt+"  '/> </div>  </div>    ";
    }



}

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

//Sveavägen 100
let falafelKungen = new Restaurang("Falafelkungen", "http://google.com",420, 500, 1000, 9, 9, "Kebab", 7, "./img/falafelkungen", "bild på falafelkungen", "falafel");
falafelKungen.createRest();
list.push(falafelKungen);
console.log(list);


let mcdonalds = new Restaurang("Mcdonalds", "http://google.com",690, 250, 600, 9, 9, "Hamburgare", 5, "./img/mcdonalds.jpeg", "bild på mcdonalds", "mcdonalds");
mcdonalds.createRest();
list.push(mcdonalds);
