# VARIABLES EN JAVASCRIPT
En JavaScript, una variable es como una caja con etiqueta donde puedes guardar un valor para usarlo y modificarlo después.
Esa “etiqueta” es el nombre de la variable, y el contenido puede ser cualquier tipo de dato: un número, un texto, un objeto, una función, etc.

*Reglas para nombrar variables*

- No deben empezar con numeros.

- No usar palabras reservadas del lenguaje (let, if, for, etc.).

- Pueden contener letras, números(no al inicio), guiones bajos o signos de dólar.

- JavaScript distingue mayúsculas y minúsculas (Nombre ≠ nombre).

para crear una variable usamos la palabra let, var o const

hay 3 maneras de crear una variable:
( let, var, const )
-   var = forma antigua, ya no se suele usar
-   let = forma moderna de crear variables
-   const = tambien moderno y muy usado, especificamente es para crear  constantes

*EJEMPLO:*

```javascript
    var email = "mango@gmail.com"; // forma antigua
    const nombre = "mango"; // constante
    let edad = 23; // forma moderna

    // lo más normal es que usemos siempre const y let
    // cuando usamos let, creamos variables y podemos reasignar su valor en un futuro.
    let color = "rojo";
    color = "verde" // le reasignamos su valor 
    console.log(color) // verde

    // eso no lo podemos hacer con const, ya que es una constante y no valor no puede ser reasginado

    // usamos el  = para asignarle un valor a la variable
    let mensaje = "hola a todos, tengo hambre";
    console.log(mensaje) // "hola a todos, tengo hambre"
```
