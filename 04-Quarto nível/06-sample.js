async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    const nave = await resposta.json();
    printNomeDaNave(nave);
}

function printNomeDaNave(nave){
    const nome = nave.name;
    console.log(nome);
}

const idDaNave = 10;
buscarNave(idDaNave);

