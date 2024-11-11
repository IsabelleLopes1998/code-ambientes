async function buscarPlanetaRecursivo(id) {
    try {
        const url = `https://swapi.dev/api/planets/${id}/`;
        const planeta = await buscarDadosPlaneta(url);
        if (!planetaExiste(planeta)) {
            return;
        }
        exibirNomePlaneta(planeta);
        buscarPlanetaRecursivo(id + 1);
    } catch (erro) {
        console.error(erro);
    }
}

async function buscarDadosPlaneta(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }
    return await resposta.json();
}

function planetaExiste(planeta) {
    return planeta.name != undefined;
}

function exibirNomePlaneta(planeta) {
    console.log(planeta.name);
}

buscarPlanetaRecursivo(1);
vevvev