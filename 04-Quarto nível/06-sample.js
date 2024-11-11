async function buscarNave(id) {
    try {
        const url = `https://swapi.dev/api/starships/${id}/`;
        const dados = await buscarDadosNave(url);
        exibirNomeNave(dados);
    } catch (erro) {
        console.error("Erro ao buscar a nave:", erro.message);
    }
}

async function buscarDadosNave(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }

    return resposta.json();
}

function exibirNomeNave(nave) {
    if (nave.name) {
        console.log(nave.name);
    } else {
        console.error("Resultado não possui campo \"name\".");
    }
}

const idDaNave = 10;
buscarNave(idDaNave);
