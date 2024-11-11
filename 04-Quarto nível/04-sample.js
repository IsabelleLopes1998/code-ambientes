async function buscarPersonagem(id) {
    try {
        const url = criarURL(id);
        const personagem = await buscarDadosAPI(url);
        exibirNomePersonagem(personagem);
    } catch (erro) {
        console.error("Erro ao buscar personagem:", erro);
    }
}

function criarURL(id) {
    return `https://swapi.dev/api/people/${encodeURIComponent(id)}/%%`;
}

async function buscarDadosAPI(url) {
    const resposta = await fetch(url);
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    return resposta.json();
}

function exibirNomePersonagem(personagem) {
    if (personagem && personagem.name) {
        console.log(personagem.name);
    } else {
        console.warn("Campo 'name' não encontrado no objeto do personagem.");
    }
}

const lukeId = 1;
buscarPersonagem(lukeId);
