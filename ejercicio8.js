/*
Dado un numero entero inviertelo y devuelve de nuevo el entero

Ejemplos:
invertirNumero(67) // Devuelve: 76

*/

function invertirNumero(numero){
    let invertido = numero.toString().split('').reverse().join('');
    invertido = parseInt(invertido) * Math.sign(numero); // Multiplicando con Math.sign(numero) le asignamos si es positivo o negativo
    return invertido
}

console.log(invertirNumero(-67));