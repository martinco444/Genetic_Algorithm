// Definición del cromosoma 
function crearCromosoma(longitud) {
    let cromosoma = [];
    for (let i = 0; i < longitud; i++) {
        // Genera genes aleatorios 
        let gen = Math.random() < 0.5 ? 0 : 1; // Genera genes binarios
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

const tamanoPoblacion = 50; // Tamaño de la población
const longitudCromosoma = 5; // Longitud de cada cromosoma 

const poblacionInicial = crearPoblacion(tamanoPoblacion, longitudCromosoma);
console.log(poblacionInicial);
