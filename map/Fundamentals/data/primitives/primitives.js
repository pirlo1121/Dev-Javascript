// Strings, todo lo que sea texto, palabras, parrafos, caracteres:
let frase = "hello world";
let nombre = "messi";
let correo = "javascript@gmail.com";
let letra = "a";

// Numbers, Todo dato numerico, puede ser entero ( 4 ) o decimal ( 3.6 ):
let edad = 23;
let cantidad = 250;
let altura = 1.80;

// boolean, Verdadero o falso, solo una de esas dos opciones
let active = false;
let registered = true;

// undefined, es un dato indefinido, en pocas palabras esta vacio, no contiene nada, normalmente tenemos estos datos cuando una variable fue inicializada pero no declarada ( crear la variable pero no darle un valor )

let data; // no le dimos ningun valor, por lo tanto es un dato de tipo Undefined


// NUll, null en JavaScript es vacío a propósito.
// No es “no sé qué hay” (eso es undefined). Es “sé que aquí no hay nada, y quiero que así conste”.

let usuario = null; // a proposito le dijimos que estará vacio

// Diferencia esencial vs undefined
// undefined = ausencia no intencional (nadie puso nada).
// null = ausencia intencional (se vació a propósito)

let usuarioAdministrador = null; // null
let usuarioCLiente; // undefined