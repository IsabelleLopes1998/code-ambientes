async function buscarPlaneta() {
    try {
        const planeta = await obterDadosPlaneta();
        exibirNomePlaneta(planeta.name);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

async function obterDadosPlaneta() {
    const resposta = await fetch("https://swapi.dev/api/planets/1/");
    verificarResposta(resposta);
    return resposta.json();
}

function verificarResposta(resposta) {
    if (!resposta.ok) {
        throw new Error(`Erro ao buscar planeta: ${resposta.statusText}`);
    }
}


function exibirNomePlaneta(nomePlaneta) {
    console.log(nomePlaneta);
}

buscarPlaneta();
