function encontrarIndices(array, objetivo) {
    const mapa = new Map();

    for (let i = 0; i < array.length; i++) {
        // número que falta 
        const complemento = objetivo - array[i];

        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }

        mapa.set(array[i], i);
    }

    return "Nenhum par de índices soma o valor objetivo.";
}

console.log(encontrarIndices([2, 7, 11, 15], 9));
console.log(encontrarIndices([1, 2, 3, 4], 8));  // Não encontra [4, 3, 1] pois procura apenas por pares.
