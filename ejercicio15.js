/*
Dado una cadena de texto devolver el caracter mas usado

Ejemplo:
masUsado('victorroblesweb.es') // devuelve : e


*/

function masUsado(texto){
   
    let mapeo_letras = {}
    let maximo_rep = 0;
    let letra_mas_rep = ''; 

    for (const letra of texto) {
       if(!mapeo_letras[letra]){
           mapeo_letras[letra] = 1 //Si no existe la letra en mapeo_letras vale 1
       }else{
          mapeo_letras[letra]++ // Por cada vez que exista lo sumas de nuevo
       }      
    }

    for (const letra in mapeo_letras) {
        if( mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > maximo_rep){
            maximo_rep = mapeo_letras[letra];
            letra_mas_rep = letra
        }
    }

    // console.log(mapeo_letras);
    return `La letra mas repetida es la: ${letra_mas_rep}, con ${maximo_rep} repeticiones`;


    // return mapeo_letras;
}

console.log(masUsado('Bienvenidos a mi canal de youtube de victor robles en España'))