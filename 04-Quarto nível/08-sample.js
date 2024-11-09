async function buscarPlanetaRecursivo(id) {
    try{
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const planeta = await resposta.json();
        if(planeta.name == undefined){
            return;
        }
        console.log(planeta.name);

    }catch(erro){
        console.error(erro);
    } 
    buscarPlanetaRecursivo(id + 1);
}

buscarPlanetaRecursivo(1);
