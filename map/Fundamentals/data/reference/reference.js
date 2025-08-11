// OBJECTS:

const persona = { // acabamos de crear un objeto llamado persona con 3 propiedades ( nombre, edad y ciudad )
  nombre: "Maicol", 
  edad: 23,
  ciudad: "Bogotá"
};

const calculadora = { // este objeto tiene 2 propiedades ( sumar , restar )
  sumar: function(a, b) { // clave: sumar
    return a + b;         // valor: es una funcion  
  },
  restar: function(a, b) {
    return a - b;
  }
};

// en los objetos podemos poner cualquier tipo de datos: strings, funciones, listas, numeros, más objetos etc

//  ARRAYS:

const colores = ["rojo", "azul", "naranja", "azul más oscuro :v"];
// la constante colores es una lista con 4 elementos ( todos son strings, pero podemos asignar cualquier otro tipo de dato )

const cosasRnadom = ["camello", 723, "michael jackson", true, 0.99, null ];

// en ese array tenemos 6 propiedades, cada propiedad se separa con una coma
// de esas 6 propiedades, 2 son strings, 2 son number, una es null y la ultima es null