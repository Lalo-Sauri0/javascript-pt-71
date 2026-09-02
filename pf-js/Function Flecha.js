// ARROW FUNCTION (FUNCIONES FLECHA)


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Unary_plus
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions


/***
 * ! iMPORTANTE
 * 
 * Return implicito
 * Q
 * 
 * ``
 * Quiere decir que si tu funcion se puede
 * escribir en una sola linea
 * sin necesidad de llaves, no es necesario poner
 * la palabra return
 * la expresion a la que apunte la flecha sera retornada
 * 
 * 
 * 
 * 
 * Expresiones lambda
 * 
 * 
 */
 

// !más común que se creeen con const las function  el => es la funcion?

const addTwoNumbers = (a,b) => a + b; 

let result = addTwoNumbers(3,4); // let para los argumentos de la funcion

console.log(`El resultado de sumar 3 + 4 es ${result}`);



// continiuaciónj

const evenOrOdd = (limit) => {
let total = 0;
for (let i = 1; i <= limit; i++) {

if( i % 2 == 0){

console.log("es par");



} else {
 console.log("es impar");

}
total += i; //suma y asignación
// total = total + i

}

return total; 

}

console.log(evenOrOdd(100));


// https://developer.mozilla.org/es/docs/Glossary/Hoisting


// 1. Function flecha multiples lineas
// 2. Diferencia entre funciones - hoisting
// 3. call back
 // esto esta padre ! 

