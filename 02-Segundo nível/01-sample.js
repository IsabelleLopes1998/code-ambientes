function calcularDesconto(preco) {
    var valorDesconto = 0.15;
    return preco - (preco * valorDesconto);
}
const preçoDoProduto = 100;
const precoFinal = calcularDesconto(preçoDoProduto);
console.log(`Preço com desconto: ${precoFinal}`);

