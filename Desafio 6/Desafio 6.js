class Fila {
    constructor() {
        this.itens = []; // Inicializa a fila
    }

    adicionar(nome) {
        this.itens.push(nome);
        console.log(`${nome} foi adicionado à fila.`);
    }

    remover() {
        if (this.itens.length === 0) {
            console.log("A fila está vazia.");
            return;
        }
        this.itens.shift();
    }

    visualizar() {
        console.log("Fila atual:", this.itens);
    }
}

const fila = new Fila();

fila.adicionar("Gabriel");
fila.adicionar("Lucas");
fila.adicionar("Ana");

fila.visualizar();

fila.remover();
fila.visualizar();
