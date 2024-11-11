async function buscarPersonagem(id) {
    try {
        const url = `https://swapi.dev/api/people/${id}/`;;
        const dados = await buscarDados(url);
        exibirNome(dados);
    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro.message);
    }
}

async function buscarDados(url) {
    const resposta = await fetch(url);
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }

    return resposta.json();
}

function exibirNome(dados) {
    if (dados.name) {
        console.log(dados.name);
    } else {
        console.error("Resultado não possui campo \"name\".");
    }
}

const id = 1_000_000_000_000;
buscarPersonagem(id);

