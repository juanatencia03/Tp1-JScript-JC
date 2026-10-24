/*
8.- Escribe un programa que pida un número y
 diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.

*/

let num = parseInt(prompt("Ingrese un número: "));

let fivisible = num % 2;

if (num % 2 == 0) {
  alert("El " + num + " es divisible por 2");
} else {
  alert("El " + num + " NO es divisible por 2");
}
