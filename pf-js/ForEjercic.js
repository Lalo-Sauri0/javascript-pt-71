
/*
const num = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
let des = 0;
for (let i = num.length - 1; i>=0 ;  i--); 

{

console.log(`Despegue desde desde ${i} para  ${num[i]}`);

}


*/

// Ejercicio 1: Cuenta Regresiva (Fácil)
// Crea un programa que imprima los números del 10 al 1 en orden descendente. Al finalizar la cuenta, el programa debe mostrar el mensaje: "¡Despegue!".

// se condiciona el for ya que solo es una cuenta
for (let i = 10; i >= 1; i--)  // i es 10, se detiene cuando es mayor oo igual a 1, va de atras para adelante
    {
    console.log(i); // se pone la condicion 
}

console.log("¡Despegue!");



// 2do ejercicio  
/**
 * 
 * Ejercicio 2: Tabla de Multiplicar (Medio)
Solicita al usuario un número entero. El programa debe mostrar la tabla de multiplicar de ese número (del 1 al 10) con el formato exacto: N x i = Resultado.

 * 
 * 
 */


// Number y prompt puedes meterles numeros
// console.log(`Dame un numero de`);
let N = Number(prompt ("Ingresa un número entero"));
//Genera la condición o tabla
for (let i = 1; i<=10; i++) // i es 1 | i se para hasta el 10, y va de aumento i++
 // for te dice basicamente todo  // no tiene ; el for

 {

   console.log(`La multiplicacion de : ${N} x ${i} =  ${N * i}`);


 }


/*
 Ejercicio 3: Suma de Pares (Difícil)
Solicita al usuario un "número límite". 
El programa debe sumar todos los números pares que existan entre el 1 y el número ingresado por el usuario. 
Al final, muestra el resultado total de la suma.

*/

let p = Number(prompt("Ingresa un numero"));  //DAME UN NUMERO
// acumulamos la suma y hacemos la variable donde es cero, aqui inicia y se va sumando consecuentemente usamos un valor
let suma = 0;

// for para definor la situacion , i va desde o inicia  y termna hasya que sea mayor o iguala p 1, sabemos que i va parar cuando i <= p (numero que demos)
// i++ suma avance sin para (hasta el i <=p), con esto sabemos que i es uno simbearho se detiene hasta que sea igual a un numero propuesto para poder realizar el ejercico
for (let i =1; i <= p;  i++) {

if (i % 2 === 0) { //se resuelve si es par (0 i impar (1)es ignorado
    
  suma+= i; //acumula el par ----- suma = suma + i;  = 20 + 10 = 30  la suma entre  1 a 10 (de numeros pares) (i) la suma es 20 más i (10)

  // console.log(`El valor ${p[i]} es par`);

    }


}

console.log(`La suma de los numeros pares que existen entre el 1 y el numero ${p} es la suma de  ${suma}`);
