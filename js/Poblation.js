// Definición del cromosoma 
function crearCromosoma(longitud) {
    let cromosoma = [];
    for (let i = 0; i < longitud; i++) {
        // Genera genes aleatorios 
        let gen = Math.floor(Math.random()*8); // Generador de cromosomas
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

const tamanoPoblacion = 500; // Tamaño de la población
const longitudCromosoma = 8; // Longitud de cada cromosoma 

const poblacionInicial = crearPoblacion(tamanoPoblacion, longitudCromosoma);
console.log(poblacionInicial);

// Función de fitness para evaluar un cromosoma
function calculateFitness(cromosoma) {
    let clashes = 0;
    const size = cromosoma.length;

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (cromosoma[i] === cromosoma[j] || Math.abs(cromosoma[i] - cromosoma[j]) === Math.abs(i - j)) {
                clashes++;
            }
        }
    }

    // Menos choques es mejor
    return size * (size - 1) / 2 - clashes;
}

// Función de crossover (recombinación) de dos cromosomas
function crossover(parent1, parent2) {
    const size = parent1.length;
    const crossoverPoint = Math.floor(Math.random() * (size - 1)) + 1;

    const child1 = parent1.slice(0, crossoverPoint).concat(parent2.slice(crossoverPoint));
    const child2 = parent2.slice(0, crossoverPoint).concat(parent1.slice(crossoverPoint));

    return [child1, child2];
}

// Función de mutación de un cromosoma
function mutate(cromosoma, mutationRate) {
    const size = cromosoma.length;
    for (let i = 0; i < size; i++) {
        if (Math.random() < mutationRate) {
            cromosoma[i] = Math.floor(Math.random() * size);
        }
    }
}


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

