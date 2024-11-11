async function buscarFilme() {
    const resposta = await fetch("https://swapi.dev/api/films/1/");
    const filme = await resposta.json();
    printarNomeDoFIlme(filme);

}
function printarNomeDoFIlme(filme){
    const titulo = filme.title;
    console.log(titulo.toUpperCase());
}

buscarFilme();
hthththth