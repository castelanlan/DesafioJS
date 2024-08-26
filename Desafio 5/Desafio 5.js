class Pilha {
    constructor() {
        this.itens = []; // Inicializa a pilha
    }

    adicionar(nome) {
        this.itens.push(nome);
        console.log(`${nome} foi adicionado à pilha.`);
    }

    remover() {
        if (this.itens.length === 0) {
            console.log("Pilha está vazia.");
            return;
        }
        this.itens.pop();
    }

    visualizar() {
        console.log("Pilha atual:", this.itens);
    }
}

const pilha = new Pilha();

pilha.adicionar("Gabriel");
pilha.adicionar("Lucas");
pilha.adicionar("Ana");

pilha.visualizar();

pilha.remover();
pilha.visualizar();
