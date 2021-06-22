/*
Dado un array de objetos de peliculas (titulo, director, vista)
mostrar todas las peliculas indicando cual has visto y cual no


Ejemplos:
misPeliculas(peliculas)

// Devuelve
Ya has visto: "El señor de los anillos de Peter Jackson"
te falta por ver: "La liga de la justicia de Zack Snyder"

Como hacerlo:
- Crear un array de objetos
- Crear una funcion para recorrer y mostrar
*/

const peliculas = [
    {
        titulo: 'Capitan america y el Soldado de Invierno',
        director: 'Russo brothers',
        vista: true
    },
    {
        titulo: 'El Conjuro 2',
        director: 'James Wan',
        vista: false
    },
    {
        titulo: 'Titanic',
        director: 'James Cameron',
        vista: true
    },
    {
        titulo: 'Army of Dead',
        director: 'Zack Snyder',
        vista: false
    }]


function misPeliculas(arreglo){
    let listaPeliculas = ''
    for (const pelicula of arreglo) {
        if(pelicula.vista){
            listaPeliculas += `Ya has visto: "${pelicula.titulo} de ${pelicula.director}" \n`
        } else {
            listaPeliculas += `Te falta por ver: "${pelicula.titulo} de ${pelicula.director}" \n`
        }
    }
    
    return listaPeliculas;
}


console.log(misPeliculas(peliculas))