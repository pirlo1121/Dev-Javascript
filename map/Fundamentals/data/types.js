// PRIMITIVOS ( string number boolean undefined null symbol bigint)
let x = 42;
let y = x; // copia el valor de x
y = 100;

console.log(x); // 42 (no cambia)
console.log(y); // 100


// DE REFERENCIA ( Object, Array, Function,  )
let estudiante = {
    nombre: "Alejandro",
    apellido: "Magno"
}
let copiaEstudiante = estudiante;
copiaEstudiante.nombre = "Cleopatra"

console.log(copiaEstudiante.nombre) // "Cleopatra"
console.log(estudiante.nombre)      // "Cleopatra"
