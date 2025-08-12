// Conversión de datos, (Cuando el programador cambia el tipo de dato intencionalmente.)
// String → Number
let edad = "25";
edad = Number(edad); // 25 (number)

// Number → String
let precio = 500;
precio = String(precio); // "500" (string)

// Boolean → String
let activo = true;
activo = String(activo); // "true" (string)

// String → Boolean
let texto = "hola";
let esVerdadero = Boolean(texto); // true

// Number → Boolean
let cero = 0;
let esCeroVerdadero = Boolean(cero); // false








//Coerción de datos (Cuando JavaScript decide cambiar el tipo automáticamente.)

// Coerción por concatenación (string gana)
console.log("5" + 2); // "52"
console.log(2 + "5"); // "25"

// Coerción en operaciones matemáticas
console.log("5" - 2); // 3  (string "5" → number)
console.log("5" * "2"); // 10 (ambos strings → number)
console.log("10" / 2); // 5  (string "10" → number)

// Coerción en comparaciones no estrictas
console.log(5 == "5"); // true  (string → number)
console.log(false == 0); // true (boolean → number)
console.log(true == 1); // true  (boolean → number)

// Coerción a boolean en contextos lógicos
console.log(Boolean(""));  // false (string vacío = boolean)
console.log(Boolean("hi")); // true (string no vacío = boolean)
console.log(Boolean(0));   // false
console.log(Boolean(123)); // true
