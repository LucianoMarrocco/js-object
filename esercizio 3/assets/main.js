console.log("js caricato");

const bestBookEver = {
    title: "L'isola degli enigmi",
    author: "Loris Barbiero",
    publicYear: 2024,
    type: [mistery, rompicapo, enigmi],
    target: "nobody",
    pages: 214,
    yearsld() {
        return newDate().getFullYear() - this.publicYear
    }
};