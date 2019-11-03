var pizzaPrice = 120;
var pizzaDiameter = 24;
var pizzaPriceCm = pizzaPrice/(Math.pow((pizzaDiameter/2),2)*Math.PI);
console.log(`Cena pice po cm2 je ${pizzaPriceCm}`);
