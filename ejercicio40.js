/* 
Dado un array de numeros, devolver el valor mas bajo y el mas alto

Ejemplos:
altoBajo([1,2,3,4,5])

// Devuelve
{
    bajo: 1,
    alto: 5
}

*/

function altoBajo(numeros){
   let mapa = {} 
   if(typeof numeros === 'object'){
      numeros.sort((a,b) =>  b - a) // Ordenamos de mayor a menor
      mapa.bajo = numeros[numeros.length - 1] 
      mapa.alto = numeros[0];

      return mapa; 

   } else {
       console.log();
   }
   
   
  
}

console.log(altoBajo([1,2,3,4,5]))