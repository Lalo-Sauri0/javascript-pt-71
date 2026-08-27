/****
 *   ? FOR
 * Loop For
 * 
 * 
 * ? Estructura de datos array 
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos.
 * area de ciencia de datos
 * 
 * 
 *  * Para manipular estos datos de manera mas eficientes

 * Datos no representan nada por si lo
 * Datos juntos y dandoles contexto se vuelve informacion
 * 
 * Checar tipos de estructuras de datos
 * 
 * *Array
 * Estructura de datos ordenadas
 * [1 . 2. 3. 4. 5] Espacio con divisiones donde se ponen datos
 * en orden
 * *Ordenados
 * 
 * 
 * !Importante 
 * Los datos se identifican por un índice , donde el índice
 * empiea a contar desde 0, en un ejeemplo de A,B,C,D el arreglo tednría
 * un tamaño / size de 4
 * 
 * ! El tañamo real se cuenta desde 1
 * 
 * !importtante pero particular de JS
 * Podemos guardar cualquier tipo de dato dentro del array
 * incluos combinaciones (letras, booleans, float)
 * 
 * 
 * Tienen tamaño dinámico - puedes hacerlo crecer, agregar elementos
 * 
 * 
 * 
 * Por que se asocia con FOR!
 * 
 * 
 * 
 * !Definicion de un array
 * 
 * sE INICIAN CON UN CONST
 * 
 * 
 * 
 */


const arrayVacio =[];
//array sin nada

const arrayContenido =["Alberto", 20, true];
const months = ["Jan", "March", "April", "June"]; //ejemplos 
//array con contenido de dif variable



// *Notación corchete [] o lo que escribimos de acuerdo a su posición
// explicado arriba el 1 te manda al 20 de array contenido.

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

//en consola se observa lo que pedimos



/**
 *  Revisar documentación 
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 * unshift
 * 
 * para ingresar elementos al comieno del array
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * Push uno o más datos los solicita - el tamaño es el número real de elementos
 * 
 * para ingresar elementos al final del array
 * 
 * 
 * 
 * 
 * Lo más comun agregar al final con push
 */



//meter datos al inicio
console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift("Javier");
console.log("Array despues");
console.log(arrayContenido);



//push final
console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false);
console.log("Array despues");
console.log(arrayContenido);



// eliminar datos shift https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift


// eliminar datos push .pop


// Eliminar datos al inicio y final
/**
 * 1. Shift elimina y devuelve el elememnto
 * en la posicion 0
 * 
 * 2. pop elimina y devuelve el ultimo elemento del array
 * 
 * Nota : lo que va dentro de los parentesis de un metodo
 * o función se conoce como argumento
 * 
 */


console.log("array antes");
console.log(arrayContenido)

//array contenido.shift()  ``
console.log(`Elemento eliminado ${arrayContenido.shift()}`);

console.log("array despues");
console.log(arrayContenido);



// pop  ```` usarlas siempre y dentro colocar backticks

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.pop();
console.log(`Elemento eliminado al final ${arrayContenido.pop()}`);

console.log("Array despues");
console.log(arrayContenido);


/***
 * 
 * !REASIGNAR
 * 
 * ! Asignar a una variable
 * 
 * usando 
 * []
 */
let valoranterior = arrayContenido[0]; // para guardar los dstos
arrayContenido[0] ="Liz";
arrayContenido[2] = "Josue";

console.log("el valor anterior es " + valoranterior);
console.log(`Resultado de la reasignacion de un elemento ${arrayContenido}`);
console.log(arrayContenido);



/***
 * !OTRA FORMA DE ELIMINAR O AGREGAR
 * Splice  - cambiar valores este es un poco mas
 * dificil, es mejor pop, y []
 * 
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * 
 * 
 * Elimina elementos o agrega
 */


console.log("SPLICEEEE");
arrayContenido.splice(1,1);
console.log(arrayContenido); //inicia en 1 y elimna 1

arrayContenido.splice(1,2);
console.log(arrayContenido);


//agregar elementos 

console.log("AGREGAR CON SPLICE")
console.log(months);
months.splice(3,0,"Mar"); //(1,2,3) 
//1, indica la posición donde se va iniciar a eliminar o agregar
// 2, cuantos elemenots vas a eliminar 0 (cero significa no vas a eliminar)
// 3 son elementos a agregar
console.log(months);

