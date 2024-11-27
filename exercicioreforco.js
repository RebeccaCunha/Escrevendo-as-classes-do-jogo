/*Objetivo
Você vai criar uma classe ExploradorEspacial com as seguintes características e funcionalidades:

Atributos: nome, nave (nome da nave que pilota), planeta atual (começa como "Terra") e combustível (começa com 100).
Métodos:
viajar: Permite ao explorador viajar para outro planeta, gastando combustível.
abastecer: Reabastece o tanque de combustível.
status: Exibe o status do explorador, incluindo o nome, a nave, o planeta atual e o nível de combustível.
Detalhes
Consumo de combustível:
Cada viagem para outro planeta consome 25 unidades de combustível.
Se o combustível acabar durante uma viagem, exiba: "Sem combustível para viajar!"
Caso contrário, exiba: "Viagem realizada com sucesso para [PLANETA]!"
Reabastecimento:
O tanque pode ser reabastecido até 100 unidades.

Status:
Exiba uma mensagem formatada com o status atual do explorador:
Exemplo: "Explorador: Alex, Nave: Falcon-X, Planeta Atual: Marte, Combustível: 75%".
Requisitos
Crie a classe ExploradorEspacial com:
Atributos: nome, nave, planetaAtual (inicia como "Terra"), combustivel (inicia com 100).
Métodos: viajar, abastecer, e status.
Dicas para implementação:
Use estruturas de decisão para verificar se há combustível suficiente antes de viajar.
Ao reabastecer, lembre-se de não ultrapassar o limite de 100 unidades.
Capriche na formatação da mensagem do método status.*/

class ExploradorEspacial {
    constructor(nome, nave, planeta, combustível) {
        this.nome = nome;
        this.nave = nave;
        this.planeta = planeta;
        this.combustível = combustível;
    }

    status() {
        console.log(`Explorador: ${this.nome}, Nave: ${this.nave}, Planeta Atual: ${this.planeta}, Combustível: ${this.combustível}%.`);
    }

    viajar(novoPlaneta) {
        if (this.combustível < 25) {
            console.log("Sem combustível para viajar!");
            return;
        }
        this.combustível -= 25;
        this.planeta = novoPlaneta;
        console.log(`Viagem realizada com sucesso para ${novoPlaneta}!`);
    }

    abastecer() {
        this.combustível = 100;
        console.log("Tanque reabastecido! Combustível agora está em 100%.");
    }
}

// Criando um explorador
let explorador1 = new ExploradorEspacial("Sam", "Conect-Z", "Terra", 80);

// Testando os métodos
explorador1.status();
explorador1.viajar("Júpiter");
explorador1.abastecer();

