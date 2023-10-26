// Definición del cromosoma 
function crearCromosoma(longitud) {
    let cromosoma = [];
    for (let i = 0; i < longitud; i++) {
        // Genera genes aleatorios 
        let gen = (Math.random()*8) + 1; // Genera genes binarios
        cromosoma.push(gen);
    }

    return cromosoma;

}

// Creación de una población inicial
function crearPoblacion(tamanoPoblacion, longitudCromosoma) {
    let poblacion = [];
    for (let i = 0; i < tamanoPoblacion; i++) {
        let cromosoma = crearCromosoma(longitudCromosoma);
        poblacion.push(cromosoma);
    }

    return poblacion;

}

const tamanoPoblacion = 10; // Tamaño de la población
const longitudCromosoma = 5; // Longitud de cada cromosoma 

const poblacionInicial = crearPoblacion(tamanoPoblacion, longitudCromosoma);
console.log(poblacionInicial);


//////////////////////////////////////////////////////////////////////////////////////////



// Función para verificar si un cromosoma es una solución válida para N reinas
function esSolucionValida(cromosoma) {
    const n = cromosoma.length;

    // Verificar ataques en filas y columnas
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Verificar ataques en la misma fila o columna
            if (cromosoma[i] === cromosoma[j]) {
                return false;
            }

            // Verificar ataques en diagonales
            const diagonal = Math.abs(cromosoma[i] - cromosoma[j]);
            if (diagonal === j - i) {
                return false;
            }
        }
    }

    return true;
}


//bucle que recorre la poblacion buscando una respuesta válida
for(i = 0; i < tamanoPoblacion; i++){
    console.log("Cromosoma " + i + ": ", esSolucionValida(poblacionInicial[i]))
}


