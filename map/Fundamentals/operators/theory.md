# OPERADORES Y PRECEDENCIA

En JavaScript, los operadores son los símbolos que le dicen al lenguaje que haga algo con los valores (sumar, comparar, asignar, etc.),
y la precedencia es el “orden de operaciones” que JS sigue para decidir qué se evalúa primero.
Es como en matemáticas:
2 + 3 * 4 → primero la multiplicación (*), luego la suma (+).

```javascript
console.log( 2 + 3 * 4) // 14 ( primero la multiplicacion, luego la suma )
```

# OPERADORES ARITMETICOS
Simplemente son operadores para hacer procedimientos matematicos ( sumar, restar, potenciar, dividir )
los operadores aritmeticos son: (+ - * / ** %)

*Ejemplo para sumar:*

```javascript
    let numero1 = 5;
    let numero2 = 12;
    let suma = numero1 + numero2 // aqui usamos el operador aritmetico para sumar (+ )
    console.log(suma) // nos dará 17
```
*Ejemplo para dividir:*

```javascript
    let numero1 = 20;
    let numero2 = 5;
    let division = numero1 / numero2 // usamos ( / ) para dividir
    console.log( division ) // 4
```

y asi con cada operador podemos hacer las operaciones basicas de las matematicas con javascript xd

---------------------------------------------------------------------------


# OPERADORES DE COMPARACION

son operadores para hacer comparaciones entre datos o variables.
por ejemplo, quiero comparar una variable x con una variable y.
al usar estos operadores siempre tendremos una respuesta booleana, es decir ( true o false )

*OPERADORES DE COMPARACION*
- (==)  igual 
- (===) estrictamente igual 
- (!=)  distinto 
- (!==) estrictamente distinto 
- (>)   mayor 
- (<)   menor
- (>=)  mayor o igual
- (<=)  menor o igual

*EJEMPLOS:*

```javascript
// Aqui usamos el operador  >= ( mayor o igual );
    let edad = 20;
    let aprobado = edad >= 18; // edad(20) es igual o mayor a 18?
    console.log( aprobado ) // true
```
Recordar que al usar un operador de comparación, como en el ejemplo anterior ( >= ), el resultado será true o false, en ese caso fue true


```javascript
// operador != ( distinto )
    let clave = 'jkjkrr33'; // string
    let nuevaclave = 'jkkjkrr33'; // el mismo string 
    let claveCambiada = clave !== nuevaclave; // true
// let claveCambiada = 'jkjkrr33' === 'jkjkrr33'
```
la variable *clave* es distinta a la *nuevaClave*?
la respuesta es false, ya que ambas son iguales, por ende en la variable *claveCambiada* obtendremos el valor de false

```javascript
    console.log(claveCambiada) // false
```

*( = , == , === )*
¿Por qué hay 3 iguales?

- 1 solo igual (=), es para *ASIGNAR* un valor a una variable
```javascript
    let dato = 35;
```
*a la variable *dato* le asignamos el valor *35*;

- 2 iguales ( == ), es para hacer una comparación simple.
```javascript
    let dato1 = "33"; // dato string
    let dato2 = 33;   // dato number
    console.log( dato1 == dato2 ) // respuesta True
```  
JavaScript detecta que *dato1* y *dato2* tienen tipos diferentes (string vs number).

Antes de comparar, convierte (dato1) "33" a un número (33).

Luego compara 33 == 33, que es true.

- 3 iguales ( comparación estricta )

al usar 3 iguales ( === ), javascript hace una comparación estricta, en pocas palabras compara el valor de las variables y además compara el tipo de datos de las variables.

```javascript
    let dato1 = "33"; // dato string
    let dato2 = 33;   // dato number
    console.log( dato1 === dato2 ) // respuesta False
```

cuando usamos 1 igual es para asginar, cuando usamos 2 iguales es para hacer una comparación simple y cuando usamos 3 hacemos una comparación estricta.

---------------------------------------------------------------------------


# OPERADORES LOGICOS
Estos operadores se utilizan para combinar expresiones lógicas y devuelven un valor booleano. Los tres principales son && (AND lógico), || (OR lógico) y ! (NOT lógico).

 1) Operador && ( AND )
```javascript
//              USANDO && 
    console.log( true && true ) // true
    console.log( true && false ) // false
    console.log( false && true ) // false
    console.log( false && false ) // false
```

 2) Operador || ( OR )
```javascript
//              USANDO ||
    console.log( true || true ) // true
    console.log( true || false ) // true
    console.log( false || true ) // true
    console.log( false || false ) // false
```

3) Operador ! ( NOT )
```javascript
//              USANDO !
    console.log( !true ) // false
    console.log( !false ) // true
```
El operador ( ! ) invierte el valor, ejemplo
si una *variable* es true, y nosotros la usamos con ( ! ), entonces será false
*otro ejemplo:*

```javascript
    let active = false;
    console.log( active ) // False
    console.log( !active ) // True
```
