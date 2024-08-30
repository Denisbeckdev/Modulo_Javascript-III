// Converte uma string para um número inteiro
// Sua implementação aqui

function convertToInt(string) {
    return parseInt(string);
}

// Converte um número inteiro para uma string
// Sua implementação aqui

function convertToString(numero) {
    return String(numero);
}

// Converte um valor para um booleano
// Sua implementação aqui

function convertToBoolean(valor) {
    return Boolean(valor);
}

module.exports = { convertToInt, convertToString, convertToBoolean };