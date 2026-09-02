// FUNCTION EXPRESSION --  Se tiene que poner variable

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function


// function expresion - cambia como se escribe, se invocan o llaman  

const getTriangleArea = function(base , height) {
return base * height / 2;

// jerarquia en programación  , si encuentra poarentesis primero toma eso
};

let area = getTriangleArea(20,24);

console.log(`El area de un triangulo con su base 20 y altura 24 es ${area}`);

/**
 * 
 * 
 * function que solicite un numero
      ese numero representa el limite de una serie
mostrar que numeros son pares o impares en una serie de 1 hasta el numero ingresado
que sea una function expression
 * 
 * 
 
 * 
 */

const SolicitaNumero = function(limit){ //no olvidar la forma, puede estar lo que sea dentro
//despues de {   aqui va for o lo que usaras}

for(let i = 0; i<= limit; i++) {

if (i % 2 == 0) {


    console.log(`El numero ${i} es par`);

} else {

    console.log(`El numero ${i} es impar`);
}


} // cierra todo el for



}; // de la funcion

// afuera se prueba la funcion

SolicitaNumero(300);
console.log("Esta es otra ejecución");
SolicitaNumero(20);


// otra forma

const evenOrOddPrompt = function () {

const limit = +prompt("ingresa el limite");

for (let i = 1; i<= limit; i++) {



    if ( i % 2 == 0) { // cierre del if con su console
console.log(`El numero ${i} es par`);
} else {
 console.log(`El numero ${i} es impar`);

} // cierre del esle
    }  // CIerre del for




}




