// 1. Definindo a classe Herói com o construtor para nome, idade e tipo
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // 2. Método atacar que verifica o tipo e exibe o ataque correspondente
    atacar() {
        let ataque;

        // 3. Estrutura de decisão para escolher o ataque com base no tipo de herói
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido"; // caso o tipo não esteja listado
        }

        // 4. Exibindo a mensagem final do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// 5. Criando instâncias da classe e chamando o método atacar
let heroi1 = new Heroi("Merlin", 150, "mago");
let heroi2 = new Heroi("Arthur", 35, "guerreiro");
let heroi3 = new Heroi("Liu Kang", 40, "monge");
let heroi4 = new Heroi("Hanzo", 29, "ninja");

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
