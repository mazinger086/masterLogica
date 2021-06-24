/* 
Dado un texto, comprobar que sea un mail valido

Ejemplos:
comprobarEmail("victor@victor.com")

// Devuelve:
true

*/


function comprobarEmail(email){
    return /^\w+@\w+\.\w+$/gi.test(email);   
}

console.log(comprobarEmail('victor#victor.com'))