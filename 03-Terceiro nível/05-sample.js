async function buscarVeiculosECalcularCusto() {
    try {
        const veiculos = await obterDadosVeiculos();
        const custoLimite = 10000;
        const veiculosCaros = filtrarVeiculosPorCusto(veiculos, custoLimite);

        exibirVeiculosCaros(veiculosCaros, custoLimite);

        const custoTotal = calcularCustoTotal(veiculosCaros);
        exibirCustoTotal(custoTotal);

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
    }
}

async function obterDadosVeiculos() {
    const resposta = await fetch("https://swapi.dev/api/vehicles/");
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados dos veículos.");
    }
    const dados = await resposta.json();
    return dados.results;
}

function filtrarVeiculosPorCusto(veiculos, custo) {
    return veiculos.filter(veiculo => parseInt(veiculo.cost_in_credits) > custo);
}

function calcularCustoTotal(veiculos) {
    return veiculos.reduce((total, veiculo) => total + parseInt(veiculo.cost_in_credits), 0);
}

function exibirVeiculosCaros(veiculos, custoLimite) {
    console.log(`Veículos caros (mais de ${custoLimite} créditos):`);
    veiculos.forEach(veiculo => {
        console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
    });
}

function exibirCustoTotal(custoTotal) {
    console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);
}

buscarVeiculosECalcularCusto();
