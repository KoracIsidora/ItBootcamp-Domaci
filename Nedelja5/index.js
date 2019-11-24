const overall = document.querySelector("#ukupno");
const prihod = document.querySelector("#prihod");
const rashod = document.querySelector("#rashod");
const sign = document.querySelector("#sign");
const opis = document.querySelector("#opis");
const iznos = document.querySelector("#iznos");
const button = document.querySelector("#dodaj");
const listaP = document.querySelector("#listaprihoda");
const listaR = document.querySelector("#listarashoda");
const procenat = document.querySelector("#procenat");
let sum = 0;
let sum1 = 0;

button.addEventListener('click', addItem);

function addItem() {

    let text = opis.value;
    if (text.trim() == '') {
        alert('Unesite opis transakcije!');
        return;
    }

    if (iznos.value == 0 || iznos.value < 0) {
        alert('Unesite ispravan broj!');
        return;
    }

    let div = document.createElement('div');
    div.className = 'items';

    let x = document.createElement('p');
    x.className = 'x';

    let y = document.createElement('p');
    y.className = 'y';

    let z = document.createElement('p');
    z.className = 'znak';

    x.innerHTML = opis.value + " ";
    y.innerHTML = parseFloat(iznos.value) + " ";
    z.innerHTML = sign.value;

    div.appendChild(x);
    div.appendChild(y);
    div.appendChild(z);

    if (sign.value == 'plus') {
        listaP.appendChild(div);
    } else {
        listaR.appendChild(div);
    }

    if (sign.value == 'plus') {
        sum += parseInt(iznos.value);
    } else {
        sum1 += parseInt(iznos.value);
    }

    prihod.value = parseFloat(sum);
    rashod.value = parseFloat(sum1);

    overall.value = parseFloat(prihod.value - rashod.value);

    procenat.value = Math.round(((rashod.value / prihod.value) * 100),2) + "%";

    let percent = document.createElement('p');
    percent.className = 'percent';

    percent.innerHTML = Math.round(((iznos.value / prihod.value) * 100),2) + "%";

    if (sign.value == 'minus') {
        div.appendChild(percent);
    }

    let rmvBtn = document.createElement('button');
    rmvBtn.className = 'rmvbtn';
    rmvBtn.innerHTML = 'Obriši';
    rmvBtn.addEventListener('click', removeItems);

    div.appendChild(rmvBtn);
}

function removeItems(e) {
    e.target.parentElement.remove();

    let vrednost = e.target.parentElement.children[1].textContent;
    let vrednost1 = e.target.parentElement.children[2].textContent;

    let j = parseInt(vrednost);

    if (vrednost1 == 'plus') {
        sum -= j;
    } else {
        sum1 -= j;
    }

    prihod.value = sum;
    rashod.value = sum1;

    overall.value = prihod.value - rashod.value;

    procenat.value = parseFloat((rashod.value / prihod.value) * 100) + "%";
}

