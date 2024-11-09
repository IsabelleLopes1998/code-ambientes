async function buscarEFiltrarPessoas() { 
    try {
        const pessoas = await obterDadosPessoas();
        const pessoasComL = filtrarPessoasPorLetra(pessoas, "L");

        exibirPessoasFiltradas(pessoasComL);
        exibirTotalPessoas(pessoasComL.length);

    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
    }
}

async function obterDadosPessoas() {
    const resposta = await fetch("https://swapi.dev/api/people/");
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados das pessoas.");
    }
    const dados = await resposta.json();
    return dados.results;
}


function filtrarPessoasPorLetra(pessoas, letra) {
    return pessoas.filter(pessoa => pessoa.name.startsWith(letra));
}

function exibirPessoasFiltradas(pessoas) {
    console.log("Pessoas cujo nome começa com L:");
    pessoas.forEach(pessoa => {
        console.log(pessoa.name);
    });
}


function exibirTotalPessoas(total) {
    console.log(`Total de pessoas encontradas: ${total}`);
}

buscarEFiltrarPessoas();
