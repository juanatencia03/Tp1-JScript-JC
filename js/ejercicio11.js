/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2 y por 5.

input: 210
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/

let num = parseInt(prompt("Ingrese un número: "));

let textoDivisible = "El " + num + " es divisible ";

if (num % 2 == 0) {
  textoDivisible += " por 2";
}
if (num % 3 == 0) {
  textoDivisible += " por 3";
}
if (num % 5 == 0) {
  textoDivisible += " por 5";
}
if (num % 7 == 0) {

  textoDivisible += " por 7";
}

if( !(num % 2 == 0 && num % 3 == 0 && num % 5 == 0 && num % 7 == 0) == true ){

  textoDivisible += ' por NINGUNO'
}

alert(textoDivisible);
