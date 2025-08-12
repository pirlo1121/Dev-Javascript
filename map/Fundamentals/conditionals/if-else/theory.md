# IF ELSE
Corregido:

Es una declaración que nos permite tomar decisiones en el código.
Es una forma de decirle al programa: "Si se cumple esta condición, haz esto".
*ESTRUCTURA DE UN IF 
```javascript
    if(){
        // bloque de código if
    }
    else{
        // bloque de código else
    }
```
En el condicional de arriba tenemos dos bloques de código.
Debemos poner una condición en los paréntesis del if.
Si la condición es verdadera (true), JavaScript ejecutará el bloque de código del if.
Si la condición no es verdadera (true), JavaScript ejecutará el bloque de código del else.

Ejemplo:
```javascript
let edad = 23;

if( edad >= 18 ){ // ¿Edad es mayor qué 18?  // respuesta True
    console.log('mayor de edad') // Este bloque se ejecuta
}
else{
    console.log('menor de edad')
}
```
En ese ejemplo, solo se ejecutará el bloque de código del if.

*Otro ejemplo:*
```javascript
let edad = 16;

if( edad >= 18 ){ // ¿Edad es mayor qué 18?  // respuesta False
    console.log('mayor de edad') 
}
else{
    console.log('menor de edad') // Este bloque se ejecuta
}
```
Ahora se ejecutó el bloque de código del else.

Sin embargo, también tenemos un *else if*.
Usando *else if*, nuestra sintaxis es:
```javascript
    if(){
        // Bloque de código if
    }
    else if() {
        // Bloque de código else if
    }
    else{
        // Bloque de código else
    }

```
Usando *else if* podemos agregar tantas condiciones como queramos

```javascript
    let temperatura = 28;

    if(temperatura > 30 ){
        console.log('Hace caloooooor!'); // Primera condición
    }
    else if(temperatura >= 20) { // Segunda condición
        console.log('Buen clima mano');
    }
    else{ // El else se ejecuta si ninguna condición anterior se ejecutó
        console.log('Mucho frio xd');
    }
```

*primera condición*: if (){}
*segunda condición*: else if (){}
El else es por si ninguna condición anterior era verdadera (true).
(Cabe aclarar que puedes usar varios else if)

Ejemplo:
```javascript

if () {         // IF = PRIMERA CONDICIÓN
} 
else if () {    // ESLE IF = SEGUNDA CONDICIÓN
} 
else if () {    // ELSE IF = TERCERA CONDICIÓN
} 
else {          // Ultimo bloque de codigo    
}
```

