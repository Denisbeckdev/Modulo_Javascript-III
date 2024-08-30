// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
// Sua implementação aqui

function dobrarNumeros(numeros) {
    return numeros.map(function (numero) {
        return numero * 2;
    });
}

const numerosOriginais = [1, 2, 3, 4, 5];
const numerosDobrados = dobrarNumeros(numerosOriginais);

console.log('Números Dobrados:', numerosDobrados); 

//----------------------------------------------

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
// Sua implementação aqui

function somarValores(numeros) {
    return numeros.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);
}

const valoresParaSoma = [1, 2, 3, 4, 5];
const somaValores = somarValores(valoresParaSoma);

console.log('Soma dos Valores:', somaValores); 

//----------------------------------------------

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
// Sua implementação aqui

function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

const numerosParaFiltrar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numerosParaFiltrar);

console.log('Números Pares:', numerosPares); 

//----------------------------------------------

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};
