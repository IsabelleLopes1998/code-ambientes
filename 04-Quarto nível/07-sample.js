async function buscarEspecie() {
    try {
        const url = "https://swapi.dev/api/species/1/";
        const dados = await buscarDadosEspecie(url);
        exibirEspecie(dados);
    } catch (erro) {
        console.error("Erro ao buscar a espécie:", erro.message);
    }
}

async function buscarDadosEspecie(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }
    return resposta.json();
}

function exibirEspecie(especie) {
    if (especie.average_lifespan) {
        const expectativaVida = parseInt(especie.average_lifespan, 10);
        console.log("Expectativa de vida:", expectativaVida);
    } else {
        console.error("Resultado não possui campo \"name\".");
    }
}

buscarEspecie();
