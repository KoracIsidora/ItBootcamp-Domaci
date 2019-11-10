function findMin() {
    var i;
    var min = Infinity;

    for (i = arguments.length; i > 0; i--) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

function cenaPice(cena, poluprecnik) {
    return cena / (Math.pow(poluprecnik, 2) * Math.PI);
}

let cena1 = cenaPice(120, 12);
let cena2 = cenaPice(130, 13);
let cena3 = cenaPice(140, 14);

console.log(findMin(cena1, cena2, cena3));

