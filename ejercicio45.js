/* 
Dado un array de alumnos (nombre y nota) mostrar 
cuantos alumnos estan supensos y cuantos aprobados


*/

let alumnos = [
    {
     nombre: 'Juan',
     nota: 10
    },
    {
      nombre: 'Laura',
      nota: 7
    },
    {
      nombre: 'Pedro',
      nota: 4
    },
    {
      nombre: 'Tomas',
      nota: 2
    }
    
]

function evaluacion(alumnos){

    let aprobados = 0;
    let promocionados = 0;
    let desaprobados = 0;
    let resultado = 'Total de alumnos:'
    alumnos.forEach(alumno => {
        if(alumno.nota >= 7){
           promocionados++; 
            // resultado += `El alumno ${alumno.nombre} promociona\n`  
        }else if(alumno.nota >= 4 && alumno.nota < 7){
            aprobados++
            // resultado += `El alumno ${alumno.nombre} esta aprobado\n` 
        }else{
            desaprobados++
            // resultado += `El alumno ${alumno.nombre} esta desaprobado\n` 
        }
    });

    return `${resultado}
    Promocionados: ${promocionados}
    Aprobados: ${aprobados}
    Desaprobados: ${desaprobados}
            `;
}

console.log(evaluacion(alumnos))