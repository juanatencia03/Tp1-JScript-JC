/* 
5.- Escribe un programa de tres líneas que pida un número, 
pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

*/


let num1= parseInt(prompt("Ingrese primer número: "))
let num2= parseInt(prompt("Ingrese segundo número: "))

let resultado = num1 + num2
//Resultado por pantalla
//alert('suma (' + num1 + ' y ' + num2+ ') =  ' + resultado);

//Resultado por consola
console.log('suma (' + num1 + ' + ' + num2+ ') =  ' + resultado);