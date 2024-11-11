async function buscarDados() {
    try {
        const dadosJSON = obterDadosJSON();
        const personagem = converterParaObjeto(dadosJSON);
        exibirNomePersonagem(personagem);
    } catch (erro) {
        console.error("Erro ao processar os dados:", erro.message);
    }
}

function obterDadosJSON() {
    return "{\"name\": \"Luke\", \"idade\": 23}";
}

function converterParaObjeto(dadosJSON) {
    try {
        return JSON.parse(dadosJSON);
    } catch (erro) {
        throw new Error("Json Invalido", erro);
    }
}

function exibirNomePersonagem(personagem) {
    if (personagem && personagem.name) {
        console.log(personagem.name);
    } else {
        console.warn("Campo 'name' não encontrado no objeto do personagem.");
    }
}

buscarDados();

buscarDados();

