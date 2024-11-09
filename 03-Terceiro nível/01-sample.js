async function buscarEDetalharNave() {
    try {
        const nave = await obterDadosNave();
        const detalhesNave = formatarDetalhesNave(nave);
        
        exibirDetalhesNave(detalhesNave);

        const tamanhoTripulacao = parseInt(nave.crew);
        const tamanhoMaximoDaTripulacao = 1000;
        verificarTamanhoNave(tamanhoTripulacao, tamanhoMaximoDaTripulacao);

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}

async function obterDadosNave() {
    const resposta = await fetch("https://swapi.dev/api/starships/9/");
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados da nave.");
    }
    return resposta.json();
}

function formatarDetalhesNave(nave) {
    return `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
    `;
}

function exibirDetalhesNave(detalhes) {
    console.log("Detalhes da Nave:");
    console.log(detalhes);
}

function verificarTamanhoNave(tamanhoTripulacao, tamanhoMaximoDaTripulacao) {
    if (tamanhoTripulacao > tamanhoMaximoDaTripulacao) {
        console.log("Esta é uma nave grande.");
    } else {
        console.log("Esta é uma nave pequena.");
    }
}

buscarEDetalharNave();
