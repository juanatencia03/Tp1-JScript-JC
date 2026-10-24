/*
6- Escribe un programa que pida dos números y escriba 
en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande

*/

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let mayor = num1;



if (num1 == num2) {
  alert("Los números son iguales y es " + mayor);
} else {
  if (num1 > num2) {
    mayor = num1;
  } else {
    mayor = num2;
  }
  alert('El '+ mayor + 'es el número más grande ');
}
