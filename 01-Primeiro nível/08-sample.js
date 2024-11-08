const pessoa = { nome: "Maria", idade: 28 };

function maior(pessoa) {
    const maiorIdade = 18;
    return pessoa.idade >= maiorIdade;
}

console.log(maior(pessoa));
