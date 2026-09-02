const numeros = 
[ 
    
    42, 7, 91, 18, 63, 25, 84, 3, 56, 71, 12, 97, 34, 68, 9, 45, 77, 21, 60, 5, 88, 31, 14, 73, 49, 2, 
    95, 38, 66, 27, 81, 10, 54, 92, 16, 69, 33, 76, 24, 58, 1, 87, 40, 65, 19, 99, 52, 29, 74, 6, 83, 35, 11, 57, 90, 
    23, 47, 79, 4, 61, 98, 26, 70, 13, 85, 32, 55, 8, 93, 41, 64, 17, 72, 28, 50, 96, 20, 67, 36, 82, 15, 59, 94, 30, 75, 22, 48, 86, 39, 62, 100, 44, 78, 53, 89, 
    37, 51, 80, 43, 46, 132, 107, 
    191, 118, 163, 125, 184, 103, 156, 171, 112, 197, 134, 168, 109, 145, 177, 121, 160, 105, 188, 131, 114, 173, 149, 102, 195, 138, 166, 127, 
    181, 110, 154, 192, 116, 169, 133, 176, 124, 158, 101, 187, 140, 165, 119, 199, 152, 129, 174, 106, 183, 135, 
    111, 157, 190, 
    123, 147, 179, 
    104, 161, 198, 
    126, 170, 113, 
    185, 130, 155, 108, 193, 141, 164, 117, 172, 128, 150, 196, 120, 167, 136, 182, 115, 159, 
    194, 122, 175, 142, 148, 186, 139, 162, 200, 144, 178, 153, 189, 137, 151, 180, 143, 146 
];

// For of

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

for (const numero of numeros) {

    console.log(`El numero es ${numero}`);
    
}

// For of funciona en arrays

/**
 * 
 * 
 * 
 * 
 * La sentencia for...of ejecuta un bucle que opera sobre una secuencia 
 * de valores provenientes de un objeto iterable. 
 * 
 * Los objetos iterables incluyen instancias de objetos nativos como Array,
 *  String, TypedArray, Map, Set, NodeList (y otras colecciones del DOM), 
 * así como el objeto arguments, generadores producidos por funciones generadoras, 
 * e iterables definidos por el usuario.
 * 
 * 
 */



// Foreach : Recorrer el array y recibe una funcion callback 
// Modifica el array original
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



numeros.forEach((numero, index, array) => {
    console.log(`El numero ${numero} con indice ${index} mas dos es  ${numero + 2}`,);


console.log("El array originales " + array);

return numero + 2;






});

/**
 *  !map
*/
// map más usados
// map ejecuta una funcion sobre cada elemento de un array
// devuelve un nuevo array con el resultado


function multiplyBy3(numero) { 
return numero * 3; // la funcion va por afuera ¿ más facil??

}
const numerosXTres = numeros.map(multiplyBy3); // aqui adentro va la funcion
console.log(numerosXTres);




// esta es otra forma aparte map.

                    //aqui adentro va numero
const numerosXCinco =  numeros.map((numero) => numero * 5); // con funcion array , guarda la funcion ?, pero lo editas despues de flceha
console.log(numerosXCinco);


// Filter más usados

// Filter en React lsitas que se ven en pantallas, o quitarlas


/**
 *  !Filter Sirve para filtrar elementos de un array
 * ! recibe una funcion de callback donde lo que retornemos debe ser una expresión
 * boolean y los elementos del array que cumplan esta co ndicion 
 * seran guardadas en una nueva array
 * 
 * 
 * 
 */

const pares = numeros.filter(function(numero) {

return numero % 2 == 0

}) ;

console.log(pares);



// multiplo de 3 solamente


const mult3 = numeros.filter(function(numero) {

return numero %  3 == 0 // Multiplo de 3

});

console.log(mult3);



// tipo fleccha
const multiplosDe3 = numeros.filter((numero) => numero % 3 == 9);




// Usando map vamos a multiplicar cada numero
// por el iva para que los sustituya
// math.round para redondear sin eso se veon todos los decimales


function mivas(numero) {
return (Math.round(numero * 1.16)); // Se puede combinar con lo que quieras al usar callbacks, funcones afuera

}  const conIva = numeros.map(mivas);

console.log(conIva);

