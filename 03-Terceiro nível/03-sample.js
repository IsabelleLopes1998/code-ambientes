async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();

        const detalhesPlaneta = `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacaoTotal = 100000;
        const populacao = parseInt(planeta.population);

        verificarPopulacao(populacao, populacaoTotal);
        
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}
function verificarPopulacao(populacao, populacaoTotal) {
    if (populacao > populacaoTotal) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}

buscarEDetalharPlaneta(1);
