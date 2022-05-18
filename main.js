let einsatzSpieler1
let einsatzSpieler2

einsatz()
function einsatz(){
    gesamtEinsatz = einsatzSpieler1 + einsatzSpieler2
}
let würfel1
let würfel2

function würfelnsp1(){

    let min = 1;
    let max = 6;
    würfel1 = Math.round(Math.random() * (max - min)) + min;
    würfel2 = Math.round(Math.random() * (max - min)) + min;
    document.getElementById("aktWuerfel1").innerHTML = würfel1;
    document.getElementById("aktWuerfel2").innerHTML = würfel2;
    rechnen()

}

let augenzahlsp1
let augenzahlsp2
let nochEineRunde
let Rundenanzahl = 1


function rechnen(){
    augenzahlsp1= augenzahlsp1 + würfel1 + würfel2

    if (augenzahlsp1 == 7) {
        console.log("Runde vorbei")

    }
    else if(nochEineRunde == 1){
        würfelnn()
        Rundenanzahl = Rundenanzahl + 1
    }

    else {

       rechnensp2()

    }
}
i = 0;
function rechnensp2() {
    if (i <= Rundenanzahl) {
        würfelnn()
        augenzahlsp2 = augenzahlsp2 + würfel1 + würfel2
    }
else
    if (nochEineRunde == 1) {
        würfelnn()
        Rundenanzahl = Rundenanzahl + 1
    } else {
        auswertung()
    }

}


