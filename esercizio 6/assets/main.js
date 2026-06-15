console.log("js caricato");

const partita = {
    minutaggio: 60,
    squadraCasa: "Italia",
    risultatoCasa: 2,
    marcatorisquadraCasa: ["Luciano", "Loris"],
    risultatoOspite: 0,
    marcatorisquadraOspiti: [""],
    squadraOspite: "Brasile",
    getadv() {
        if (this.risultatoCasa > this.risultatoOspite) {
            return this.squadraCasa
        } else if (this.risultatoCasa === this.risultatoOspite) {
            return "svegliatevi";
        } else {
            return this.squadraOspite
        }

    }

}