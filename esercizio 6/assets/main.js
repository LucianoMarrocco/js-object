console.log("js caricato");

const partita = {
    minutaggio: 60,
    squadraCasa: "Italia",
    // risultatoCasa: 2
    marcatorisquadraCasa: ["antonio", "sergio"],
    // risultatoOspite: 0,
    marcatorisquadraOspiti: [""],
    squadraOspite: "Brasile",
    getRH() {
        return this.marcatorisquadraCasa.length
    },
    getRA() {
        return this.marcatorisquadraOspitilength
    },
    getadv() {
        if (this.getRH() > this.getRA()) {
            return this.squadraCasa
        } else if (this.getRH() === this.getRA()) {
            return "svegliatevi";
        } else {
            return this.squadraOspite
        }

    }

}