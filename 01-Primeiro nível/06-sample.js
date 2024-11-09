const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const atividadeUsuario = true;

function dadosDousuario(nomeUsuario, idadeUsuario, atividadeUsuario) {
    if (nomeUsuario) {
        console.log(`${ nomeUsuario  } tem ${  idadeUsuario  } anos e está ativo.`);
    } else {
        console.log(`${atividadeUsuario} está inativo.`);
    }
}

dadosDousuario(nomeUsuario, idadeUsuario, atividadeUsuario);
