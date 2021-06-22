/* 
Dada una cadena de texto y un numero, recortar el string
mostrando los primeros caracteres.

Ejemplos:
recortar('Cursos desarrollo web', 6) // Devuelve: 'Cursos'

*/

function recortar(texto, del){
    if(typeof texto === 'string' && typeof del === 'number'){
        return texto
          .split('')
          .splice(0, del)
          .join('')
    } else {
        return 'Datos invalidos'
    }
    
}
console.log(recortar(true, '6'))