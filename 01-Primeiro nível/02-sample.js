const valorBoolean = true;

function verAcesso(informacoesDeLoginDoUsuario) {
    if (valorBoolean && informacoesDeLoginDoUsuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const informacoesDeLoginDoUsuario = { nome: "João", admin: true };
verAcesso(informacoesDeLoginDoUsuario);
