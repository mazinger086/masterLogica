/*

¿Cuanto es el X por ciento de Y numero

*/

function calcularPorcentaje(porciento, numero){
    let resultado =  (porciento * numero) / 100;

    return `El ${porciento}% de ${numero} es: ${resultado}`
}

console.log(calcularPorcentaje(43, 897));