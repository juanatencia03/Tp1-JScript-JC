/*
9.- Escribe un programa que pida una frase y 
escriba las vocales que aparecen
Nota: Tener en cuenta la función length y 
substring o charAt (developer mozilla)

Ejemplo:

input: Hola mundo
Output: oauo

*/


let frase = prompt("Ingresa una frase:");


let vocalesEncontradas = "";


let fraseMin_ = frase.toLowerCase();


for (let i = 0; i < fraseMin_.length; i++) {
    
    let caracter = fraseMin_.charAt(i);
    
   
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        
        vocalesEncontradas += frase.charAt(i);
    }
}

alert("Output: " + vocalesEncontradas);