function encontrarNumero(array, numero) {
    var posicao = array.indexOf(numero);

    // Se indexOf retorna -1 é por que o número 
    // não foi encontrado no array
    if (posicao === -1) {
        return `O número ${numero} não está presente no array.`;
    } else {
        return `O número ${numero} está presente na posição ${posicao}.`;
    }
}

console.log(encontrarNumero([10, 20, 30, 40, 50], 30));
console.log(encontrarNumero([10, 20, 30, 40, 50], 25));
