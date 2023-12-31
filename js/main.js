// Crea un array composto da 10 automobili. 
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, ibrida, gpl).

let automobili= [
    {marca: "Ferrari", modello: "Roma", alimentazione: "benzina"},
    {marca: "Porsche", modello: "Cayanne", alimentazione: "gpl"},
    {marca: "Audi", modello: "Q3", alimentazione: "diesel"},
    {marca: "Mercedes", modello: "Classe G", alimentazione: "ibrida"},
    {marca: "Bugatti", modello: "W16 Mistral", alimentazione: "elettrica"},
    {marca: "Lamborghini", modello: "Huracan", alimentazione: "benzina"},
    {marca: "Maserati", modello: "Levante", alimentazione: "diesel"},
    {marca: "Tesla", modello: "Model S", alimentazione: "elettrica"},
    {marca: "Ferrari", modello: "Portofino", alimentazione: "diesel"},
    {marca: "Porsche", modello: "Panamera", alimentazione: "benzina"}
];

// Dividi le automobili in 3 array separati:

let listaAutoBenzina = [];
let listaAutoDiesel = [];
let listaAltreAuto = [];

// nel primo array solo le auto a benzina,
// nel secondo solo le auto a diesel,
// nel terzo il resto delle auto.

automobili.forEach(function(automobile) {
    if(automobile.alimentazione == "benzina") {
        listaAutoBenzina.push(automobile);
    } else if (automobile.alimentazione == "diesel") {
        listaAutoDiesel.push(automobile);
    } else {
        listaAltreAuto.push(automobile);
    }

});

console.log(automobili);

// Infine stampa separatamente i 3 array.

for(let i = 0; i < listaAutoBenzina.length; i++){
    console.log("marca:", listaAutoBenzina[i].marca);
    console.log("modello:", listaAutoBenzina[i].modello);
    console.log("alimentazione:", listaAutoBenzina[i].alimentazione);
    console.log("");

}

for(let i = 0; i < listaAutoDiesel.length; i++){
    console.log("marca:", listaAutoDiesel[i].marca);
    console.log("modello:", listaAutoDiesel[i].modello);
    console.log("alimentazione:", listaAutoDiesel[i].alimentazione);
    console.log("");

}

for(let i = 0; i < listaAltreAuto.length; i++){
    console.log("marca:", listaAltreAuto[i].marca);
    console.log("modello:", listaAltreAuto[i].modello);
    console.log("alimentazione:", listaAltreAuto[i].alimentazione);
    console.log("");

}







