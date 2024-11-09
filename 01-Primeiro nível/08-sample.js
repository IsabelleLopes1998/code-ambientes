const pessoa = { nome: "Maria", idade: 28 };

function maiorDeIdade(pessoa) {
    const maiorIdade = 18;
    return pessoa.idade >= maiorIdade;
}

console.log(maiorDeIdade(pessoa));
