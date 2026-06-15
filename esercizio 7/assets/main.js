console.log("js caricato");

const conto = {
    saldoIniziale: 10000000000,
    transazioneSpesa: 467,
    transazioneBenzina: 564,
    transazioneRistorante: 2345,
    transazioneUsciteAmici: 45678,
    saldorimanente() {
        return this.saldoIniziale - this.transazioneBenzina - this.transazioneSpesa - this.transazioneUsciteAmici - this.transazioneRistorante
    },
}
console.log(saldorimanente);
