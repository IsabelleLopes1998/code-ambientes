function criarVetorNumerosInteirosPares(vetor) {
    const vetorNumerosPares = [];
    const numeroDivisor = 2;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % numeroDivisor === 0) {
            vetorNumerosPares.push(vetor[i]);
        }
    }
    return vetorNumerosPares;
}

var numero1 = 1;
var numero2 = 2;
var numero3 = 3;
var numero4 = 4;
var numero5 = 5;
var numero6 = 6;
const vetorNumerosInteiros = [numero1, numero2, numero3, numero4, numero5, numero6];
const vetorNumerosParesCriados = criarVetorNumerosInteirosPares(vetorNumerosInteiros);
console.log(vetorNumerosParesCriados);

criarVetorNumerosInteirosPares(vetorNumerosInteiros);
