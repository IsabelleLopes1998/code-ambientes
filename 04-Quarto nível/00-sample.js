async function buscarPersonagem() {
    const id = obterIdPersonagem();
    
    if (!validarId(id)) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const personagem = await obterDadosPersonagem(id);
        mostrarResultado(personagem);
    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}


function obterIdPersonagem() {
    return document.getElementById("personagemId").value;
}


function validarId(id) {
    return id && id > 0;
}


async function obterDadosPersonagem(id) {
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    
    if (!resposta.ok) {
        throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
    }
    
    return resposta.json();
}


function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
      </div>`;
}

buscarPersonagem();
