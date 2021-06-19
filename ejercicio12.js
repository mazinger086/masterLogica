/*
Dados dos numeros mostrar todos los numeros desde ese al 0 de 8 en 8
en una lista con guiones y cada numero debe empezar por n°

Ejemplo:

hastaCero(100) //Devuelve 
-n°100
-n°92
-n°84
-n°76
-n°68
-n°60
-n°52
-n°44
-n°36
-n°28
-n°12
-n°4
--FIN--

 */

function hastaCero(numero){
    let resultado = `-- Del numero ${numero} al 0 -- \n`;

    while(numero > 0){
        resultado += `-n°${numero} \n`;
        numero -= 8;
    }

    resultado += `-- FIN --`;
   

    return resultado;

}

console.log(hastaCero(100));