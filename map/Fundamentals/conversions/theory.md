# Conversión y coerción de datos

En JavaScript, podemos cambiar el tipo de dato de alguna variable

*ejemplo:*
```javascript
    let numero1 = 4; // number
    let numero2 = "10"; // string
    console.log( numero1 + numero2 ) // "410"
```


ahí JavaScript convirtió a string la variable *numero1* y luego la sumó con la otra variable, "4" + "10" = "410"

a eso se le conoce como coerción de datos.

# Entonces, ¿qué es coerción de datos?

*es cuando JavaScript le cambia el tipo de dato, en el ejemplo anterior, JavaScript cambió el tipo de dato del número 4 y lo convirtió a string*

4 = number   ====>>>> ahora es "4" = string.

*otro ejemplo:*
```javascript
    let num1 = 20;  // number
    let num2 = "2"; // string
    let suma = num1 + num2; // ( "20" + "2" ) string
    console.log( suma ) // "202"
```

# Conversión de datos:

la conversión de datos ocurre cuando nosotros como programadores le cambiamos intencionalmente el tipo de dato a alguna variable o dato dentro del código.

ejemplo: 
```javascript
    let edad = "27"; // edad es una variable de tipo String
    edad = Number(edad) // acá la cambiamos a tipo Number

```

Number( ), String( ), Boolean( ); las usamos para convertir (hay más formas de hacerlo)

```javascript
    Number("42");   // Conversión: string → number
    String(100);    // Conversión: number → string
    Boolean("hi");  // Conversión: string → boolean
```


- coerción de datos = cuando el lenguaje cambia el tipo de dato de alguna variable o dato

- conversión de datos = cuando el programador cambia intencionalmente el tipo de dato de alguna variable o dato
