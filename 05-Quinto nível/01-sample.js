function principal() {
    const id = 42;
    const usuario = obterUsuario(id);
    const condicional1 = 1;
    const condicional2 = 2;
    usuarioAtivo(condicional1, condicional2, usuario);

    const item1 = 10;
    const item2 = 20;
    const item3 = 30;
    const item4 = 40;
    const item5 = 50;
    const itens = [item1, item2, item3, item4, item5];
    const escalar = 3;
    const total = multiplicarPorEscalar(itens, escalar);
    console.log("O total é:", total);
    atualizarDados(usuario);
}

function usuarioAtivo(condicional1, condicional2, usuario) {
    if (verificarCondicoes(condicional1, condicional2, usuario)) {
        console.log("Usuário está ativo");
        return;
    }
    console.log("Usuário não está ativo");
}

function verificarCondicoes(condicional1, condicional2, usuario) {
    const condicao1 = 1;
    const condicao2 = 2;
    return usuario.ativo && condicional1 === condicao1 && condicional2 === condicao2;
}

function multiplicarPorEscalar(vetor, escalar) {
    let resultado = 0;
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i] * escalar;
    }
    return resultado;
}



function obterUsuario(id) {
    const users = obterTodosUsuarios();
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    console.log("Usuário não encontrado");
    return null;
}

function obterTodosUsuarios() {
    const users = [{
        id: 42,
        nome: "João Silva",
        idade: 25,
        ativo: true
    }, {
        id: 43,
        nome: "Maria Souza",
        idade: 28,
        ativo: false
    }];
    return users;
}

function atualizarDados(usuario) {
    if (verificarIdade(usuario)) {
        return;
    }
    console.log("Atualizando usuário:", usuario.id);
    salvarDados();
    aumentarIdade(usuario);
}

function verificarIdade(usuario) {
    const maiorIdade = 18;
    return !usuario || usuario.idade < maiorIdade;
}
function aumentarIdade(usuario) {
    usuario.idade += 1;
    console.log("Nova idade do usuário:", usuario.idade);
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function calculadoraReversa(operacao, valor1, valor2) {
    const res = calculadora(operacao, valor1, valor2);
    const reversa = reverterString(res.toString());
    console.log("String invertida:", reversa);
    return reversa;
}

function calculadora(operacao, valor1, valor2) {
    const codigoSoma = 1;
    const codigoMultiplicacao = 2;
    const codigoSubtracao = 3;
    switch (operacao) {
        case codigoSoma:
            return soma(valor1, valor2);
        case codigoMultiplicacao:
            return multiplicacao(valor1, valor2);
        case codigoSubtracao:
            return subtracao(valor1, valor2);
    }
    return divisao(valor1, valor2);
}

function soma(valor1, valor2) {
    return valor1 + valor2;
}

function multiplicacao(valor1, valor2) {
    return valor1 * valor2;
}

function subtracao(valor1, valor2) {
    return valor1 - valor2;
}

function divisao(valor1, valor2) {
    if (valor2 === 0) {
        throw new Error("Divisão por zero");
    }
    return valor1 / valor2;
}

function reverterString(string) {
    return string.split("").reverse().join("");
}


function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        if (eImpar(i)) {
            resultado -= i;
        } else {
            resultado += i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    exibirDados();

    return resultado;
}

function eImpar(numero) {
    return numero & 1;
}

function exibirDados() {
    const dados = ["Valor 1", "Valor 2", "Valor 3"];
    for (let i = 0; i < dados.length; i++) {
        console.log("Dados:", dados[i]);
    }
}

function multiplicarItens() {
    const item1 = 5;
    const item2 = 7;
    const item3 = 9;
    const item4 = 11;
    const itens = [item1, item2, item3, item4];
    const escalar = 3;
    const total = multiplicarPorEscalar(itens, escalar);
    console.log("Cálculo total:", total);
    return total;
}

function mostrarInfo() {
    const valores = ["Dado 1", "Dado 2", "Dado 3"];
    for (let j = 0; j < valores.length; j++) {
        console.log("Info:", valores[j]);
    }
}

mostrarInfo();
principal();
const operacao = 1;
const valor1 = 2;
const valor2 = 3;
console.log("Resultado do cálculo:", calculadoraReversa(operacao, valor1, valor2));
const id = 5;
console.log("Resultado do processamento de dados:", processarDados(id));
console.log("Resultado da função:", multiplicarItens());
