/* 
Dado un array de strings, devolver otro con los valores
que esten formados por mas de dos palabras

Ejemplos:
dosPalabras('hola','san francisco', 'ciudad real', 'victor');
*/

function dosPalabras(arreglo){
    let resultado = arreglo.filter(dos => dos.includes(' '));

    return resultado
}

console.log(dosPalabras(['hola','hola que tal','san francisco', 'ciudad real', 'victor']))