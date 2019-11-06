function cenaPice(cena, poluprecnik) {
    return cena / (Math.pow(poluprecnik, 2) * Math.PI);
}

let cena = 120;
let poluprecnik = 12;

console.log(cenaPice(cena, poluprecnik));


