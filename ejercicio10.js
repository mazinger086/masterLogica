/*
Dado u numero, mostrar una escalera con escalones de "[-]"
usando el numero para los niveles de la escalera

Ejemplos:
escalera(4) // Devuelve:
[-]
[-][-]
[-][-][-]
[-][-][-][-]

*/

function escalera(num){
    let escaleraCompleta = '';
    for (let nivel = 1; nivel <= num; nivel++) {       
        
        let escalones = '';
        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += '[-]'            
        }

        escaleraCompleta+= escalones + '\n';
        
    }

    return escaleraCompleta
   
}

console.log(escalera(4));