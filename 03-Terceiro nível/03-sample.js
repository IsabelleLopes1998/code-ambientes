async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const planeta = await obterDadosPlaneta(idPlaneta);
        const detalhesPlaneta = formatarDetalhesPlaneta(planeta);

        exibirDetalhesPlaneta(detalhesPlaneta);

        const populacaoTotal = 100000;
        const populacao = parseInt(planeta.population);

        verificarPopulacao(populacao, populacaoTotal);

    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

// Função para obter os dados do planeta a partir da API
async function obterDadosPlaneta(idPlaneta) {
    const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados do planeta.");
    }
    return resposta.json();
}

// Função para formatar os detalhes do planeta em uma string
function formatarDetalhesPlaneta(planeta) {
    return `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
    `;
}

// Função para exibir os detalhes do planeta no console
function exibirDetalhesPlaneta(detalhes) {
    console.log("Detalhes do Planeta:");
    console.log(detalhes);
}

// Função para verificar a população e exibir uma mensagem apropriada
function verificarPopulacao(populacao, populacaoTotal) {
    if (populacao > populacaoTotal) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}

buscarEDetalharPlaneta(1);
