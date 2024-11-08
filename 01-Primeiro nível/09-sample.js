class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const idadeGestor = 40;
const pessoa = new Gestor("Lucas", idadeGestor);
console.log(pessoa);
