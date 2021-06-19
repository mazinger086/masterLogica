/*

Dado un texto y una busqueda, censurar todas las 
coincidencias de la busqueda con el texto [-CENSURADO-]

Si el texto y la busqueda estan vacios mostrar
"No puedes leer el texto y la busqueda" en el caso de que ambos parametros no lleguen

*/

// function censurar(texto, busqueda){   
//     try {
//         let arrTexto = texto.split(' ');
//         let txtFinal = ''
//         arrTexto.forEach( (txt, index) => {            
//             if(txt.includes(busqueda)){
//                 txt = '[-censurado-]'                
//             }            
//             (index === 0) ? txtFinal+= `${txt}` : txtFinal+= ` ${txt}` 
//         }); 

//         return txtFinal


//     } catch {
//         let error = "No puedes leer el texto y la busqueda"
//         return error
//     }
    
// }


// console.log(censurar('Hey hijo de pula', 'pula'))

function censurado(texto=false, busqueda=false){

    let resultado = '';

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda"
    } else if(!texto && busqueda) {
        resultado = "No puedes leer el texto"
    } else if(texto && !busqueda) {
        resultado = "No puedes leer la busqueda"
    } else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]')
    }

    return resultado;
}

console.log(censurado('HolaManola, hola caracola, holaperinola', 'hola'));