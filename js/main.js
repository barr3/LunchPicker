"use strict";


//Might use local storage later for favorites
/*
const LOCAL_STORAGE_KEY_NTILH = "app.rests.advanced";

let rests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NTILH)) || [];
*/

let annexet = false; //Sets annexet to false. i.e, Craafords is the default starting location.
var list = [] //List that contains all the restaurant objects

//Restaurant class
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
        this.createRest();
    }

    get getName(){
        return this.namn;
    }


    //Checks wether the user is at craafords och annexet and sets "avstånd" accordingly
    setAvstånd(annexet){
        if (annexet == true) {
            this.avstånd = this.avståndAnnexet;
            document.getElementById(this.id).innerHTML= this.avstånd;
        } else {
            this.avstånd = this.avståndCraafords;
            document.getElementById(this.id).innerHTML= this.avstånd;
        }
    }

    //This method creates the restaurant object in the html
    createRest(){
        //this.id++;
        document.getElementById("0").innerHTML += "<div class='restaurang'> <div> <h3>" + this.namn + "</h3> <a href='" + this.adress + "' >Adress</a> <p id='"+ this.id +"'>"+ this.avstånd  + "</p>  <p>"+ this.mat +"</p> <p>"+ this.folk  +"</p> </div> <div> <img src=' "+ this.img_link  +"  ' alt=' "+ this.img_alt+"  '/> </div>  </div>    ";
    }

}

//Is triggered by the press of the button on the top of the webpage. Toggle the location of the user.
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


function sortRest(){

    //Removes all the Restaurant code in index.html so it can be created later
    document.getElementById("0").innerHTML = "";


    ////////////////////////////////////////////

    /*
    //Sorterar efter avstånd med kortast avstånd på toppen
    list.sort((a,b) => {

        return a.avstånd - b.avstånd;

    })
    */

    /*
    //Sorterar efter avstånd med kortast avstånd på toppen
    list.sort((a,b) => {

        return b.avstånd - a.avstånd;

    })
    */


    /*
    //Sorterar efter antalet människor med minst antal människor på toppen
    list.sort((a,b) => {

        return a.folk - b.folk;

    })
    */

    /*
    //Sorterar efter antalet människor med flest antal människor på toppen
    list.sort((a,b) => {

        return b.folk - a.folk;

    })
    */


    /*
    //Sorterar med mest mat på toppen
    list.sort((a,b) => {

        return b.mat - a.mat;

    })
    */

    /*
    //Sorterar med minst mat på toppen
    list.sort((a,b) => {

        return a.mat - b.mat;

    })
    */



    //Sorterar alfabetiskt med A på toppen
    list.sort((a,b) => {

        let na = a.namn.toLowerCase(),
            nb = b.namn.toLowerCase();

        if (na < nb){
            return -1;
        }
        if (na > nb) {
            return 1;
        }
        return 0;

    });


    /*
    //Sorterar alfabetiskt med A på toppen
    list.sort((a,b) => {

        let na = a.namn.toLowerCase(),
            nb = b.namn.toLowerCase();

        if (na < nb){
            return 1;
        }
        if (na > nb) {
            return -1;
        }
        return 0;

    });
    */


    /////////////////////////////////////////

    //Listar namnen
    list.forEach((e) => {

        console.log(`${e.namn} ${e.namn} `);

    })


    console.log(list);

    //return item1.attr.localeCompare(item2.attr);



    var i;
    for (i = 0; i < list.length; i++) { //Loops through all the restaurants.

        //console.log(list[i].getName);

        //Creates the Restaurant code in index.html in the sorted order
        list[i].createRest();

        //console.log(list[i]);
    }



}



window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




function dropDown() {
    console.log("Drop down");
    document.getElementById("dropDownMenu").classList.toggle("show");

}



function linkClicked(){
    console.log("link clicked");
}





//Constructs mcdonalds
let mcdonalds = new Restaurang("Mcdonalds", "http://google.com",690, 250, 600, 6, 9, "Hamburgare", 5, "./img/mcdonalds.jpeg", "bild på mcdonalds", "mcdonalds");
list.push(mcdonalds);

//Constructs falafelkungen
let falafelKungen = new Restaurang("Falafelkungen", "http://google.com",420, 500, 1000, 9, 9, "Kebab", 7, "./img/falafelkungen", "bild på falafelkungen", "falafel");
list.push(falafelKungen);



let nybergs = new Restaurang("Nybergs Konditori", "http://biltema.se",0, 50, 300, 8, 5, "Konditori", 9, "./img/nybergs", "bild på nybergs koditori", "nybergs");
list.push(nybergs);

//console.log(list);
