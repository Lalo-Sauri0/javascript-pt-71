console.log("Hola Mundo") /*console. log para abrir  y al usar 
open con live server se ve el mensaje ademas de en inspeccionar
en consolar podemos ver lo que hicimos dentro de live server*/




/** COMENTARIOS , INTERESANTES
 * En javascript hay 3 formas de declarar variables
*!existe una forma que ya no se recomienda su uso
!var (YA NO SE USA)

Al proceso de crear una variable y darle un valor se le llama asignación

A las variables que puede ser reasignadas  (
pueden cambiar en un futuro el valor que se declara: )
usando lo siguiente 
* ? let nombreVariables = valor;  



** El operador = se conoce como operador de asignación
** Una vez creada una variable podemos usarla
** podemos usarla en otros lugares el código
** utilizando su nombre, las variables al ser utilizadas no van entre ""

TIpo de escritura CamelCase
var = ListaErronea


*/

let nombre = "Josue"; /*el ; es opcional* y "" obligatorias */ 
/*Tipo STRING*/
console.log(nombre);  /*al utilizar las var no van entre""  */
let name = "Alejandro";
console.log(name);

/* las variables que no pueden ser reasignadas (su valor no puede cambiar)
se declaran :
? const nombreVariable = valor;

Nota :
Palabras reservadas : Son palabras que utilizan el lenguaje de programación
y si intentamos usarlas en otros lados pueden generar errores



*/


const birthYear = 1993; /*tIPO NUMERO*/
console.log(birthYear);

/* Reasignando una variable (cambiando el valor que tiene)
Cuando reasignamos una variable (una variable ya creada)

! ya no es necesario poner let
 */


nombre = "BrenFer"
console.log(nombre);
console.log(name);

/* seccion de prueba */
/*
birthYear = 1995;*/

/* sale este error ya que es una constante
una constante no cambia, inmutable!

app.js:66 Uncaught TypeError: Assignment to constant variable.
    at app.js:66:11 */


/* Concatenar 
Nos permite pegar el valor de una variable a un texto*/


console.log("Hola soy " + nombre + " y estoy en Gen con " + name + " naci en el año " + birthYear); 


/** / los espacios antes y despues de ""
son clave para tener el espacio en la concatenación
*/ 
