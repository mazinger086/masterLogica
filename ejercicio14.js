/*
Dado un string y un numero repetir el string tantas veces como el numero indique

//Devuelve 
repiteme('victor', 2)

*/

function repiteme(texto, numero){
    let resultado = ''
    for (let i = 0; i < numero; i++) {
        resultado += texto + '\n';        
    } 

    return resultado;
}

console.log(repiteme('Ivo',5))

// Funcion prototipo
String.prototype.repiteme = function(numero){
    let resultado = ''
    for (let i = 0; i < numero; i++) {
        resultado += this;
        resultado += '\n'        
    } 

    return resultado;
}

console.log('victor robles web'.repiteme(3));