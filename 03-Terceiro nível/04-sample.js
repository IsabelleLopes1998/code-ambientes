async function buscarPersonagemENave(idPersonagem) {
    try {
        const personagem = await obterDadosPersonagem(idPersonagem);

        if (personagem.starships.length > 0) {
            const nave = await obterDadosNave(personagem.starships[0]);
            const tripulacaoLimite = 100;
            verificarTamanhoTripulacao(nave, tripulacaoLimite);
        } else {
            exibirMensagemSemNave(personagem.name);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}

// Função para obter os dados do personagem a partir da API
async function obterDadosPersonagem(idPersonagem) {
    const resposta = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados do personagem.");
    }
    return resposta.json();
}

// Função para obter os dados da nave a partir da API
async function obterDadosNave(urlNave) {
    const resposta = await fetch(urlNave);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados da nave.");
    }
    return resposta.json();
}

// Função para verificar o tamanho da tripulação da nave
function verificarTamanhoTripulacao(nave, tripulacaoLimite) {
    const tripulacao = parseInt(nave.crew);
    if (tripulacao > tripulacaoLimite) {
        console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
    } else {
        console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
    }
}

// Função para exibir uma mensagem caso o personagem não tenha naves
function exibirMensagemSemNave(nomePersonagem) {
    console.log(`${nomePersonagem} não possui naves registradas.`);
}

buscarPersonagemENave(1);
