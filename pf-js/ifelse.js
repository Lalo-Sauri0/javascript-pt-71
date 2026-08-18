/** CONDICIONALES
 * * Series de condiciones para que algo suceda
 * 
 *  En programación para el manejo de estas condiciones tenemos
 * ! el bloque if else
 * 
 * ? bloque if pregunta por una
 * ? condición en caso de que esta condición
 * ? sea verdadera, ejecuta un bloque de código, si es falso no ejecuta nada
 * 
 * ? else maneja la ejecución de código en caso negativo
 * 
 * 
 * lo que se coloca dentro del if, debe ser 
 * algo que genere un valor
 * * TRUE o False (tipo de dato boolean)
 * 
 * pueden funcionar if
 * o if else
 * 
 * 
 

  Convertir de texto a número

 */
 /* si se trata de convertir algo que no es un número
 como resultado obtendremos NaN (nota a number */
/*Al agregar Number antes de prompt lo convertimos strign a numero */


/* const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let birthYearPlusTen = Number(birthYear) + 10;

console.log(birthYear);
console.log(birthYearPlusTen); */


const birthYear1 = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 - birthYear1;
/*para conocer la edad, importante el console.log*/
console.log(age);


/**
 *  Todo operadores lógicos
 * Sirve para hacer operaciones cuyo resultado es 
 * verdadero o falso
 * 
 * *Mayor que  >
 * Evalua si n es mayor que x
 * 2> 1 == verdadero
 * == igualdad en programación
 * 1> 2 == Falso
 * 0 > 0 == Falso
 * 
 * * Menor que < 
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 = Falso 
 * 
 * * Comparador de igualdad
 ** 2==2 == verdadero
  3 ==1 == falso

 * * Mayor o igual que >=
  2 >= 2 == verdaderp
  3 >= 1 == verdadero
  2 >= 3 == Falso

  ** Menor o igual que <=
   4 <= 4 == Verdadero
   4 <= 5 == verdadero
   7 <= 5 == Falso 
 */

/**
 * * Diferente de !=
 * 
 *  5 != 4 == Verdader
 *  5 !=5 == Falso
 *  99 != 100 == Verdader0
 * 
 *  Negación (not) !
 * 
 *  !verdadero == Falso
 *  !Falso == Verdadero 
 *  !(4 <= 4) == Falso nega lo opuesto obtenido al princpiop
 * 
 * 
 * 
 * 
 * * AND &&
 * ? verdadero solo si ambos lados de la expresión son verdadero
 * ? si un lado es falso todo el resultado se vuelve falso
 * 
 *  verdadero && verdadero == verdadero
 * verdadero && falso == falso
 * falso && verdadero == falso
 * 
 * 
 * 
 *  age >= 6 && age <= 12
 * age 7 == verdadero 
 * age 15 == falso 
 * age 5 == Falso
 * 
 * 
 * 
 * * OR || Es un operador que devuelve
 * ? Falso si ambos lados de la expresión son falso
 * ? Si un lado de la expresión es verdadero  devuelve verdadero
 *  verdadro || Falso  == verdadero
 * Falso || Verdadero == Verdadero
 * 
 * Falso || Falso = Falso 
 * 
 * age >20 || age < 100
 * 
 * age 101 == verdadero
 * age 18 == verdadero
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * *Dentro de los parentesis () va la condición que se va evaluar
 * *Dentro de las {} va el código que se va a ejecutar en caso 
 * * de que la condición sea verdadero, ver ejemplo de abajo
 * ? if else
 */

/* se ejecuta uno u otro dependiendo de que lo tenga if  para despues else*/
if (age >= 18 ){

    alert("Bienvenidos eres mayor de edad");

    /* los {} van despues de if () */
/*se abre else {} por si la condicion 
es negativa */

} else {
    alert("Aún no puedes pasar, vuelve cuando cumplas 18");

}

/**
 * 
 * 
 *  ? else if
 * * Nos permite evaluar más de una condición
 * 
 */


if (age >= 18 ){ 

    alert("Bienvenidos eres mayor de edad");

    /* los {} van despues de if () */
/*se abre else {} por si la condicion 
es negativa */

} else if ( age >= 6 && age <= 12) {
    alert("Felicidades entraste a la primaria");

} else if (age >=5  && age >= 3) {
    alert("Felicidades sigues en el Kinder");
}  else {
    alert("Estas baby o aún no naces");

}
