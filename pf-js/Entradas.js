/**
 *  prompt: 
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor ingreso el usuario
 * 
 * 1.2 usar el valor inmediatamente
 * 
 * !importante 
 * 1. NO SE RECOMIENDA SU USO
 * EN APLICACIONES EN PRODUCCIÓN (USADA POR GENTE)
 * 2 BLOQUEA EL CÓDIGO. Esto se refiere al código que este debajo
 * de donde escribimos el uso de prompt no se va a ejecutar, hasta que el
 * usuario ingrese algo.
 * 
 * 3. NO SE PUEDE PERSONALIZAR el prompt
 * 4. TODO lo que ingresa mediante prompt siempre es un String
 * 
 * 
 * 
 * 
 * 
 * \n salto de linea
 * 
 * 
 */

const edad = prompt("ingresa tu edad", 15); /*el usar prompt  hace un numero siepre string*/
console.log(edad); 

const nombre = prompt("ingresa tu nombre");
console.log("Hola soy " + nombre + "\n y tengo " + edad + " años");


/*

let name = prompt("Ingresa tu nombre", "Jose Eduardo");

console.log(name); */


/** Ejercicio
 * 
 *  prompt para obtener una pelicula
 * 
 * prompt para obteener un personaje de esa serie
 * 
 * 
 * prompt para obtener xq es el favorito
 * 
 * 
 * 
 * 
 * 
 * 

 */


const pelicula = prompt("Cual es tu pelicula fav");

const personaje = prompt("Cual es tu personaje favorito de esa pelicula");

const Xq = prompt ("¿por que es el favorito");

console.log("Mi pelicula favorita es " + pelicula + "\n  Mi personaje favorito es " + personaje + " \n y es mi favorito porque " + Xq );
 
alert("Mi pelicula favorita es " + pelicula + "\n  Mi personaje favorito es " + personaje + " \n y es mi favorito porque " + Xq );