const valorBoolean = true;

function verAc(informacoesDeLoginDoUsuario) {
    if (valorBoolean && informacoesDeLoginDoUsuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const informacoesDeLoginDoUsuario = { nome: "João", admin: true };
verAc(informacoesDeLoginDoUsuario);
