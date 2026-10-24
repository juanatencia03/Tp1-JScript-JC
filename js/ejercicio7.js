/*
7.- Escribe un programa que pida 3 números 
y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande

*/

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));
let mayor = num1;


if(num1 > num2 && num1 > num3){
   mayor = num1
   alert('El '+ mayor + ' es el número más grande ');
}

if(num2 > num1 && num2 > num3){
   mayor = num2
   alert('El '+ mayor + ' s el número más grande ');
}

if(num3 > num2 && num3 > num1){
   mayor = num3
   alert('El '+ mayor + ' es el número más grande ');
}

if (num1 == num2 && num2 == num3){
 
  alert("Los números son iguales y es " + mayor);

}
