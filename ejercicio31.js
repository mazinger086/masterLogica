/* 
Dado un numero, indicar que tipo de angulo es

Ejemplos:
console.log(angulo(47))
console.log(angulo(90))
console.log(angulo(145))
console.log(angulo(180))

*/

function angulo(numero){
    let tipoAngulo = '';

    if(numero < 90 && numero > 0){
        tipoAngulo = 'Angulo Agudo'
    } else if(numero === 0){
        tipoAngulo = 'Angulo Nulo'
    } else if(numero === 90){
        tipoAngulo = 'Angulo Recto'
    } else if(numero > 90 && numero < 180){
        tipoAngulo = 'Angulo Obtuso'
    } else if(numero === 180){
        tipoAngulo = 'Angulo Llano'
    } else if(numero < 180 && numero > 360){
        tipoAngulo = 'Angulo Concavo'
    } else if(numero >= 360){
        tipoAngulo = 'Angulo Completo'
    } else {
        tipoAngulo = 'Por favor ingrese un valor apropiado'
    }

    return tipoAngulo;
}

console.log(angulo(91));