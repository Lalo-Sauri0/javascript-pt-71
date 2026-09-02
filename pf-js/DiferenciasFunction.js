/***
 * 
 *  DIFERENCIAS 
 * 
 * Hoisting
 * Es un proceso por el cual las function y las variables escritas
 * con var, pasan a estar hasta arriba en el rpoceso de ejecucion
 * 
 * 
 */

console.log("function declaration " + multiplyNumbers(20,6));
const addNumber = function(a,b){
return a + b;

} 
// funcion declaration


//flecha
const divideNumbers = (a, b) => a / b;



// funcion expression 

function multiplyNumbers (a,b) { 
return a * b; 

}

console.log(divideNumbers(10,2));


// https://eloquentjavascript.net/
// LIBRO JAVASCRIPT

// https://www.eloquentjavascript.es/


// https://developer.mozilla.org/es/docs/Glossary/Hoisting



// PRACTICA -- BUCLES O CONDICIONALES

/****
 * 
 * 
 1.Crear una funcion


2. No tiene parametros
3. Tampoco tiene return
4. Para que el usuario adivine el numero secreto
4.  Bucles y condicionales
5. el usuario tiene 3 intentos
6. Si el usuario ingresa el numero incorrecto darle una pista
 * 
 * 
 * 
 * el numero es secreto es mayor o el numero secreto es menor
prompt
 * 
 * 
 * function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
 * 
 *  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */


function getRandomArbitrary(min, max) {
const adivi = +prompt("ingresa y adivina el número");

for (let i = 1; i<= adivi; i++) {
 
    if ( i % 2 == 0) {

      console.log(`El numero es ${getRandomArbitrary}`);

    } else {

        console.log(adivi) 
    }








} 




  return Math.random() * (max - min) + min;
}



