async function buscarPersonagem() {
    try{
        const id = 1000000000000;
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
        const personagem = await resposta.json();
        console.log(personagem.name);
    }catch(erro){
        console.error(erro);
    }
}

buscarPersonagem();
