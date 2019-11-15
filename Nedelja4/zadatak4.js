let sastojak1 = {
    ime : 'so',
    kolicina: 0.1,
    cena: 50
}

let sastojak2 = {
    ime : 'sir',
    kolicina: 0.2,
    cena: 50
}

let sastojak3 = {
    ime : 'ajvar',
    kolicina: 0.5,
    cena: 40 
}

let sastojak4 = {
    ime : 'hleb',
    kolicina: 1,
    cena: 50
}

let sastojak5 = {
    ime : 'mleko',
    kolicina: 1,
    cena: 100
}

let przenice =  {
    imeRecepta: 'Przenice:',
    tezina: 'Tezina: Pocetni',
    sastojci: [sastojak1,sastojak2,sastojak3,sastojak4,sastojak5]
}

console.log(przenice);