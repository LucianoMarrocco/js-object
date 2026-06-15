console.log("js caricato");

const home = {
    yearConstruction: 2020,
    metratura: 900,
    piani: 2,
    riscaldamento: "autonomo",
    presenzaCustode: true,
    calprezzometroquadro(prezzo) {
        return prezzo / this.metratura;
    },
    ultimaRistrutturazione: 2019,
    APE: "C",
}
