var pizzaCount = 0;
var orderBtnClassName = 'btn-order';
var orderBtnClassName1 = 'btn-order-now';
let orderButtons = document.getElementsByClassName(orderBtnClassName);
let orderButtons1 = document.getElementsByClassName(orderBtnClassName1);
const counter = document.getElementById('counter');

for (let button of orderButtons) {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
}

function selectPizza(element) {
    console.log(element);
    pizzaCount++;
    counter.innerHTML = pizzaCount;
}

for (let button of orderButtons1) {
    button.addEventListener('click', function () {
        resetPizza(button);
    });
}

function resetPizza() {
    let now = new Date();
    if (pizzaCount == 0) {
        alert('Niste naručili picu!');
    } else if (pizzaCount != 0) {
        counter.innerHTML = `<p>Naručili ste ${pizzaCount} pica, trenutno vreme je ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.</p>`
        pizzaCount = 0;
    }

}

