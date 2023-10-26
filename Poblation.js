// Definición del cromosoma (puedes ajustarlo según tu problema)
function crearCromosoma(longitud) {
    let cromosoma = [];
    for (let i = 0; i < longitud; i++) {
        // Genera genes aleatorios (pueden ser números, valores booleanos, etc.)
        let gen = Math.random() < 0.5 ? 0 : 1; // Ejemplo: genes binarios
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

// Ejemplo de uso
const tamanoPoblacion = 50; // Tamaño de la población
const longitudCromosoma = 5; // Longitud de cada cromosoma (ajusta según tu problema)

const poblacionInicial = crearPoblacion(tamanoPoblacion, longitudCromosoma);
console.log(poblacionInicial);
