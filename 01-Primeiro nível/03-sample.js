const dataInicial = "2024-01-01";
const dataFinal = "2024-12-31";

function calcularDiferencaDeDias(dataInicial, dataFinal) {
    return new Date(dataFinal) - new Date(dataInicial);
}

const respostaDiferencaDeDias = calcularDiferencaDeDias(dataInicial, dataFinal);
console.log(respostaDiferencaDeDias);
