const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const atividadeUsuario = true;

function dU(nomeUsuario, idadeUsuario, atividadeUsuario) {
    if (nomeUsuario) {
        console.log(`${ nomeUsuario  } tem ${  idadeUsuario  } anos e está ativo.`);
    } else {
        console.log(`${atividadeUsuario} está inativo.`);
    }
}

dU(nomeUsuario, idadeUsuario, atividadeUsuario);
