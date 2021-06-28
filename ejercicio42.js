/* 
Dados dos numeros, sacar un numero aleatorio entre ellos.

Ejemplos:

aleatorio(1,100) // Devuelve: 46

*/

function aleatorio(min, max){
    // se le vuelve a sumar min ya que si resto 6 - 1 solo llegaria a 5 y no devolveria 6
    return Math.round(Math.random() * (max - min) + min);  
}

console.log(aleatorio(1,6));

// let lista = ['a','b','c','d']

// var l = []

// function listo(lista){
//     l.push(lista.slice(2))
//         return l
    
// }

// console.log(listo(lista));







