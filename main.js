let einsatzSpieler1
let einsatzSpieler2


function einsatz(){
    gesamtEinsatz = einsatzSpieler1 + einsatzSpieler2
}
let würfel1
let würfel2

function würfeln(){

    let min = 1;
    let max = 6;
    würfel1 = Math.round(Math.random() * (max - min)) + min;
    würfel2 = Math.round(Math.random() * (max - min)) + min;
    

}

let augenzahlsp1
let augenzahlsp2
let nochEineRunde
let Rundenanzahl = 1


function rechnen(){
    augenzahlsp1= augenzahlsp1 + würfel1 + würfel2

    if (augenzahl == 7) {
        console.log("Runde vorbei")

    }
    else if(nochEineRunde == 1){
        würfeln()
        Rundenanzahl = Rundenanzahl + 1
    }

    else {

       rechnensp2()

    }
}
i = 0;
function rechnensp2(){
    if (i <= Rundenanzahl)
    würfeln()
    augenzahlsp2 = augenzahlsp2 + würfel1 + würfel2
else if(nochEineRunde == 1){
        würfeln()
        Rundenanzahl = Rundenanzahl + 1
    }
else{
    auswertung()
    }

}


