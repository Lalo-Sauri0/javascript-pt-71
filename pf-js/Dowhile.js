/***
 *  Todo - do while
 * * Loops 
 * 
 * Diferencia while - do while
 * 
 * ? do while. siempre se ejecuta por lo menos una vez
 * 
 * Al ejecutar primero y luego evaluar
 * te permite tener una ejecución grantizada
 * 
 * --contraseñas (ejemplos) a la tercera se bloquea // o INTENTOS 
 * 
 * 
 * !Necesita un contador externo
 * !no debemos olvidar actualizar dicho contador
 *! si no bucle infinito
 * 
 * 
 * 
 */


 let counter = 200;

 do{
console.log("hola");    
console.log(counter);
//operador de suma y asignación
// +=
counter+= 1
 } while (counter <= 100); //esta parte debe ser verdadera

 console.log(counter);



 counter = 1;
 do{
   
    if (counter % 2 ==0) {


        console.log(`El numero ${counter} es par`);


    } else {

        console.log(`El numero ${counter} es impar`);
    }
   
    counter++;
 } while(counter <200); 


 //lopps intercambibles, do while - while