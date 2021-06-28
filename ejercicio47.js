/* Dado un array de objetos, devolver cuales son las aficiones
 mas comunes de los usuarios 

 Ejemplos:
 aficiones(usuarios)
 
 */

 const usuarios = [
     {
       nombre: 'victor',
       aficion: ['informatica', 'leer', 'correr']  
     },
     {
        nombre: 'Pedro',
        aficion: ['futbol', 'trabajar', 'viajar'] 
      },
      {
        nombre: 'Laura',
        aficion: ['cine', 'comer', 'bailar']  
      },
      {
        nombre: 'Daniel',
        aficion: ['informatica', 'videojuegos', 'estudiar' ] 
      },
      {
        nombre: 'Carlos',
        aficion: ['cine', 'dormir', 'caminar']  
      },
      {
        nombre: 'Luca',
        aficion: ['videojuegos', 'salir', 'bailar' ] 
      },
      {
        nombre: 'Ivo',
        aficion: ['youtube', 'dormir', 'comer']  
      },
      {
        nombre: 'Juan',
        aficion: ['informatica', 'trabajar', 'estudiar' ] 
      },
]

function aficiones(arrObj){
   let mapeo = {}

    arrObj.forEach(arr=>{
        
        for (const x of arr.aficion) {
            if(mapeo[x]){
                mapeo[x]++
            }else{
                mapeo[x] = 1
            }
        }
    })

    return mapeo;
   
}

console.log(aficiones(usuarios))