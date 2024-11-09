async function buscarPersonagem(id) {
    
    try{
        const url = encodeURIComponent(`https://swapi.dev/api/people/${id}/%%%`);
        const resposta = await fetch(url);
        const personagem = await resposta.json();
        console.log(personagem.name);
    }catch(erro){
        console.error(erro);
    }
}

const lukeId = 1;
buscarPersonagem(lukeId);
