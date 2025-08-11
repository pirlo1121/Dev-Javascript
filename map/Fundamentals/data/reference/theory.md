# TIPOS DE DATOS DE REFERENCIA

 (Object, Array, Function, Date ) hay más, pero veremos solo esos

En JavaScript, los tipos de referencia son los que no guardan el valor directamente, sino una referencia (un “puntero”) a un lugar en memoria donde está el dato.
Si copias uno, en realidad ambos apuntan al mismo lugar, y un cambio se refleja en el otro.

# OBJECT
# En JavaScript, un objeto es una colección de propiedades que tienen un nombre (clave) y un valor. 
*EJEMPLO:*

```javascript
    let usuario = {
        nombre: "Bruce", // string
        apellido: "Wayne", // string
        capital: 9999999999999999, // number
        edad: 30 // number
    }
```

las propiedades del objeto anterior son

clave: nombre , apellido , capital , edad
valor: "Bruce" , "Wayne" , 9999999999999999 , 30

---------------------------------------------------------------------------


# Array
un array es una lista de datos, puedes guardar cualquier tipo de dato ( string, number, object, etc )
los datos se guardan en la lista, cada dato tiene un indice que lo ubica

```javascript
    let frutas = ["kiwi", "pera", "naranja"]; // frutas es un array de 3 elementos strings

    // cada elemento de la lista tiene un indice, el primero elemento tiene el indice 0

    //    indices [ 0 ]    [ 1 ]     [ 2 ]
    let frutas = ["kiwi", "pera", "naranja"]; 

    console.log(frutas) // ["kiwi", "pera", "naranja"]
    console.log(frutas[0]) // le decimos el indice [0], entonces nos devolverá "kiwi", ya que esta en el indice 0
```
---------------------------------------------------------------------------


# FUNCIONES
Una función en JavaScript es un bloque de código reusable que realiza una tarea específica. Es como un "mini-programa" o una receta que puedes definir una vez y usarla cuantas veces necesites. Su propósito principal es organizar tu código, evitar la repetición y hacer que tu programa sea más fácil de leer y mantener.

```javascript
    // creamos la funcion
    function sumar(a,b){ // la Función se llama sumar, y tiene 2 parametros (a) y (b)
        return a + b 
    }
    // la funcion suma ya existe en nuestro programa, pero para usarla debemos invocarla
    // para invocarla solo debemos escribir su nombre + parentesis + argumentos

    sumar(30,15); // aca invocamos la funcion, y le pasamos sus 2 argumentos (30) y (15);
    // esos argumentos se convierten en (a) y (b) dentro de la funcion, por lo tanto la función retornará la suma de 30 + 15 

    let total = sumar(30,15); // gaurdamos el resultado de la suma en una variable
    console.log(total) // resultado: 45
```
---------------------------------------------------------------------------


# Date
El tipo de dato Date en JavaScript se utiliza para trabajar con fechas y horas. 📅 Podemos crear, manipular y dar formato a momentos específicos en el tiempo.

```javascript
    let today = new Date();
    console.log(today) // 2025-08-11T05:41:00.555Z
    // new Date() me dará la fecha actual; año, mes dia, hora, minuto y segundo
```