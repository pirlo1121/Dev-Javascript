// OPERADORES ARITMETICOS

// sumar +
let manzanas = 5;
let peras = 3;
let totalFrutas = manzanas + peras;
console.log("Frutas totales:", totalFrutas); // 8

// resta -
let precio = 50;
let descuento = 15;
let precioFinal = precio - descuento;
console.log("Precio final:", precioFinal); // 35

// multiplicación *
let entradas = 4;
let precioEntrada = 12;
let totalPago = entradas * precioEntrada;
console.log("Total a pagar:", totalPago); // 48

// división /
let distancia = 120; // km
let velocidad = 60;  // km/h
let tiempo = distancia / velocidad;
console.log("Tiempo de viaje:", tiempo, "horas"); // 2 horas

//modulos %
let mum = 23;
let esPar = num % 2 === 0; // el modulo es sacar el resto de una división
console.log( esPar ) // false





// OPERADORES DE COMPARACIÓN

// ==
let numero = 5;
let texto = "5"; 
console.log(numero == texto); // true 

// ===
let numero2 = 5;
let texto2 = "5";
console.log(numero2 === texto2); // false 

// !=
let edad = 18;
console.log(edad != 20); // true 

// !==
let edad2 = 18;
console.log(edad2 !== "18"); // true 

// > 
let temperatura = 25;
console.log(temperatura > 20); // true

// <
let altura = 1.70;
console.log(altura < 1.80); // true

// >=
let puntos = 85;
console.log(puntos >= 80); // true

// <=
let vel = 60;
console.log(vel <= 60); // true


// ejemplo usandolos en un script

let edadPersona = 20;
let licencia = true;
// aqui usamos operadores de comparacion y logicos
if (edadPersona >= 18 && licencia === true) {
    console.log("Puedes conducir ");
} else {
    console.log("No puedes conducir ");
}





// OPERADORES LOGICOS

// && ( AND )
let age = 25;
let money = 100;

if (edad >= 18 && dinero >= 50) {
    console.log("Puedes entrar al concierto ");
} else {
    console.log("No puedes entrar ");
}


// ||( OR )
let esFinDeSemana = false;
let estoyDeVacaciones = true;

if (esFinDeSemana || estoyDeVacaciones) {
    console.log("Hoy se duerme ");
} else {
    console.log("Ag, a trabajar ");
}


// ! ( NOT )
let stock = 0;
if (!(stock > 0)) {
    console.log("Producto agotado ");
} else {
    console.log("Producto disponible ");
}

