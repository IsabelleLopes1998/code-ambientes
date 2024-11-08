async function buscarDados() {
    try{
        const dados = "{\"name\": \"Luke\", \"idade\": 23}";;
        const personagem = JSON.parse(dados);
        printNomePersonagem(personagem);
    }catch(erro){
        console.erro("JSON Inválido", erro);
    }
}

function printNomePersonagem(personagem){
    const nome = personagem.name;
    console.log(nome);
}

buscarDados();
