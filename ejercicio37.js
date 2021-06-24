/* 
Dado un array o un texto, devolver el elemento
o palabras que mas aparecen

Ejemplos:
elQueMasAparece('victor robles victor')
elQueMasAparece([1,2,3,4,5,2,3,2])

*/

function elQueMasAparece(valores){
   let mapeo = {}, 
       masFrecuente = '',
       valorMasFrecuente = 0;

   if(typeof valores === 'string'){
       valores = valores.split(' ');      
   } 
   
   for (const valor of valores) {
        if(!mapeo[valor]){
            mapeo[valor] = 1
        }else{
            mapeo[valor]++
        }
   } 

   for (const el in mapeo) {
       if(mapeo[el] > valorMasFrecuente){
           valorMasFrecuente = mapeo[el];
           masFrecuente = el;
       }
   }
   

   return [masFrecuente, valorMasFrecuente];
}


console.log(elQueMasAparece('hola victor hola señora'))