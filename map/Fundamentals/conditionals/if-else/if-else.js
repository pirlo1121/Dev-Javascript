
``` -------------------------- EJEMPLO 1 ------------------------------```

let edad = 17;

if (edad >= 18) { // la condición va dentro de los parentesis ( )
  console.log("Registro completado: eres mayor de edad.");
} else {
  console.log("No puedes registrarte: eres menor de edad.");
}


``` -------------------------- EJEMPLO 2 ------------------------------```

let precio = 100;
let descuento = 20;

if (descuento > 0) {
  let precioFinal = precio - descuento;
  console.log("Precio con descuento: " + precioFinal);
} 
else {
  console.log("Precio sin descuento: " + precio);
}


``` -------------------------- EJEMPLO 3 ------------------------------```

let usuario = "maicol";
let password = "12347";

if (usuario === "maicol" && password === "1234") { // false
  console.log("Bienvenido, acceso concedido.");
} 
else {
  console.log("Credenciales incorrectas."); 
}


``` -------------------------- EJEMPLO 4 ------------------------------```

let nota = 82;

if (nota >= 90) { // ¿la nota es mayor o igual a 90? false
  console.log("Excelente");
} 
else if (nota >= 70) { // ¿la nota es mayor o igual a 70? true
  console.log("Aprobado");
} 
else if (nota >= 50) {
  console.log("En recuperación");
} 
else {
  console.log("Reprobado");
}



``` -------------------------- EJEMPLO 5 ------------------------------```

let rol = "editor";

if (rol === "admin") {
  console.log("Acceso total a la plataforma");
} 
else if (rol === "editor") { // true
  console.log("Puedes modificar y publicar contenido");
} 
else if (rol === "lector") {
  console.log("Solo puedes leer el contenido");
} 
else {
  console.log("Rol desconocido, acceso restringido");
}
