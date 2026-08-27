


/****
 * 
 * For loop
 * Es una estructura de control repetitiva
 * El bloque de codigo dentro de ella se va repetir n veces
 * 
 * 
 * ? El bucle for cuenta con 3 partes dentro de los parentesis
 * *1. una variable que va actuar como contador, comun es que se llame i
 * *2. Es la condicion de ejecución, esto quiere decir que mientras la condicion sea 
 * *veerdadera el bucle se va ejecutar.
 * *3. El incremento del contador
 * 
 * 
 * !Nota
 * 
 * Se suele usar mucho para recorrer arrays.
 * 
 * 
 * 
 * 
 *  Metodo para saber el tamaño de un array!
 * 
 * *   nombre.Array.length 
 */


const numeros = [
  12, 45, 7, 89, 23, 56, 34, 78, 91, 10,
  67, 32, 4, 76, 54, 21, 98, 43, 65, 11,
  87, 29, 50, 73, 16, 94, 38, 61, 8, 82,
  27, 69, 14, 95, 41, 58, 3, 77, 36, 84,
  19, 63, 47, 90, 25, 71, 6, 53, 80, 31,
  99, 42, 17, 68, 35, 86, 22, 74, 9, 57,
  93, 40, 15, 62, 28, 81, 5, 70, 48, 96,
  24, 59, 33, 88, 13, 66, 44, 79, 2, 55,
  97, 30, 18, 72, 46, 85, 20, 64, 39, 92,
  1, 52, 26, 75, 49, 83, 37, 60, 51, 100
];


console.log(`El tamaño del array es ${numeros.length}`);

for (let i = 0; i < numeros.length; i++)
  {
console.log(`El numero en la posicion ${i} es ${numeros[i]}`);
  }

/*
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
  */

let total = 0;
for (let c = 0; c < numeros.length; c++) 
  
  {

// sintaxis tradicional
total = total + numeros[c];
console.log(`El valor actual del acumulado es ${total}`);

/*
//sitaxis abreviada 
total += numeros[c];
*/

}

console.log(`La suma de los 100 elementos del array es ${total}`);



/***
 * 1. For para recorrer el array de numeros
 * 2. En cada iteracion mostrar en consola si
 * el numero es par o impar
 *
 */

/*

for ( let z = 0; z < numeros.length; z++) 
{
let resultado = numeros[z] % 2 === 0 "par" : "impar "; 
  console.log(`El valor es  ${numeros[z]}`);


}


*/

// logica de hacer una variable pero es repetitiva 

for (let z = 0; z < numeros.length; z++) {
    let num = numeros[z]; // número actual esto es ser reduntan no se necesita un let

    if (num % 2 === 0) {
        console.log(`El valor ${num} es par`);
    } else {
        console.log(`El valor ${num} es impar`);
    }
}

//otra forma de logica y más sencilla

for (let z = 0; z < numeros.length; z++) {

    if (numeros[z] % 2 === 0) {
        console.log(`El valor ${numeros[z]} es par`);

    } else {
        console.log(`El valor ${numeros[z]} es impar`);
    }
}


