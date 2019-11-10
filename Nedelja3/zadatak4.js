function kolikoPicaMiTreba(mesecno, godine) {
    let iznos = mesecno * 12 * (100 - godine);
    return iznos; 
}

kolikoPicaMiTreba(10,26);
console.log(kolikoPicaMiTreba(10,26));