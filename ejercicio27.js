/* 
Dado un numero , mostrar a cuantos años meses y dias equivalen

Ejemplos:
calcularDias(920);

Equivale a 2 años 6 meses y 10 dias.

*/


function calcularDias(dias){
    let year = Math.floor(dias / 365)    
    let dias_restantes = (dias % 365);
    let month = Math.floor(dias_restantes / 30);
    let day = dias_restantes % 30;
    
    return `Equivale a ${year} años ${month} meses y ${day} dias`
}

console.log(calcularDias(1024))