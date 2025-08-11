
# TIPOS DE DATOS PRIMITIVOS

# string:

    Es una secuencia de caracteres (texto).
    Se declara Con comillas simples '...', dobles "...", o template literals `...`.

    ```javascript
        let nombre = "Newton";
        let saludo = 'Hola, ' + nombre ; // interpolación
        console.log(saludo); // Hola, Newton
    ```

---------------------------------------------------------------------------

# number:

    Numeros Enteros y decimales, positivos y negativos, todos bajo el mismo tipo.
    ejemplo:

    ```javascript
        let numero1 = 30;
        let numero2 = 40;
        let suma = numer1 + numero2;
        console.log(numero1 + numero2) // 70

    ```

---------------------------------------------------------------------------


# boolean:
    Son solo dos valores posibles: true o false.

    ```javascript
        let activo = true;
        let registrado = false;
    ```

---------------------------------------------------------------------------

# undefined:
    Una variable declarada pero sin valor asignado.

    ```javascript
    let data; // no le asignamos ningun valor
    console.log(data) // undefined ( no la definimos )
    ```

---------------------------------------------------------------------------


# null:
    Representa la ausencia intencional de valor. 

    ```javascript
    let dato = null; // null es enfatizar en que la variable esta vacia, es un dato null
    ```
---------------------------------------------------------------------------


*Hay más tipos de datos primitivos, pero acá solo veremos los más importantes al empezar con javascript*