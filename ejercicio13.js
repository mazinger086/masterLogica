/*

Dado un array dividirlo en tantos sub-arrays
como sea necesario basandonos en  un numero que indique su tamaño

*/

function divideArray(arrPpal, num){
    let arreglos = [];
    for (const elem of arrPpal) {
        
        let ultimo = arreglos[arreglos.length - 1] // Accedes al ultimo valor ya que con el length cuenta del 1 y los arrays desde 0

        if(!ultimo || ultimo.length === num){ //Si ultimo no existe o ultimo.length es igual al num
            arreglos.push([elem]);
          
        } else {
            ultimo.push(elem);            
        }      
    } 
    
    return arreglos
    
}

console.log(divideArray([7,8,9,1,2,3,7], 2))