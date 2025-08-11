# TIPOS DE DATOS EJ JAVASCRIPT
    En JavaScript, los tipos de datos son las distintas “formas” en las que la información puede existir dentro de tu programa: números, textos, listas, objetos, valores especiales, etc.
    Piensa que una variable en JavaScript es como una cajita, y el tipo de dato es el tipo de contenido que guarda esa cajita.
    En javascript tenemos dos tipos de datos ( datos primitivos ) y ( datos de referencia )
    
    **PRIMITIVOS Y DE REFERENCIA**

- Tipos primitivos → Stack (la estantería ordenada)

    *Cómo se guardan:*
    Se almacenan directamente con su valor en una zona de memoria llamada stack (pila).
    El stack es como una torre de bloques bien ordenada: rápido de acceder, pero cada bloque es independiente.

    *Qué significa:*
    Si copias una variable primitiva, haces una copia del valor, no un enlace al original.
    Cambiar una no afecta a la otra.

Ejemplo:

```javascript
{
    let a = 5;      // a → [5]
    let b = a;      // b → copia de 5
    b = 10;         // solo cambia b
    console.log(a); // 5
    console.log(b); // 10

};
```

- Tipos de referencia → Heap (el almacén gigante)

    Cómo se guardan:
    El valor real (el objeto, array, función…) se guarda en una zona más grande y flexible llamada heap.
    En el stack solo se guarda una referencia (puntero) que indica dónde está en el heap.

    Qué significa:
    Si copias una variable de referencia, ambas apuntan al mismo lugar en el heap.
    Cambiar una, cambia el contenido para las dos.

    Ejemplo:
```javascript
    let obj1 = { color: "Azul" };  
    let obj2 = obj1; // obj2 y obj1 apuntan al mismo lugar en el heap
    obj2.nombre = "Rojo";

    console.log(obj1.nombre); // "Rojo" 
```
