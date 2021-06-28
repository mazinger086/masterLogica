/* 
Dado un string devolver todos los posibles substrings

Ejemplos:
todosLosSubstrings('hola')

*/

function todosLosSubstrings(palabra){
    let substrings = [];

    for (const letra in palabra) {
        let comienzo = parseInt(letra);
        for (let i = 0; i <= palabra.length - comienzo; i++) {
            let final = parseInt(i) + comienzo
            substrings.push(palabra.substring(comienzo, final))
        }
    }

   return substrings.filter(el => el != '');
    
}

console.log(todosLosSubstrings('hola'))