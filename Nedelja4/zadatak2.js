let recepti = [
    {
        imeRecepta: 'Spagete u belom sosu:',
        tezina: 'Tezina: Srednji',
        sastojci:  ['Spagete', 'pavlaka za kuvanje', 'beli luk', 'curece meso', 'maslac', 'jaja', 'so', 'biber']
    },
    {
        imeRecepta: 'Przenice:',
        tezina: 'Tezina: Pocetni',
        sastojci: ['Hleb', 'mleko', 'sir', 'ajvar', 'so']
    },
    {
        imeRecepta: 'Palacinke:',
        tezina: 'Tezina: Lak',
        sastojci: ['Brasno', 'mleko', 'jaja', 'so', 'secer', 'kisela voda', 'dzem', 'euro krem']
    },
    {
        imeRecepta: 'Lovacke snicle:',
        tezina: 'Tezina: Majstor',
        sastojci: ['Junece meso', 'sargarepa', 'krompir', 'paradajz sos', 'so', 'biber', 'zacini']
    }

]

function lako (recepti){
    recepti.forEach(element => {
        if (element.tezina == 'Tezina: Lak' || element.tezina == 'Tezina: Pocetni')
            console.log(element);
    })

}

lako(recepti);
















