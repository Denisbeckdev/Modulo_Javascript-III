// Calcula o perímetro e a área de um retângulo
// Sua implementação aqui

function calcularRetangulo(retangulo) {
    const { largura, altura } = retangulo;

    const area = largura * altura;
    const perimetro = 2 * (largura + altura);

    return {
        perimetro: perimetro,
        area: area
    };
}

const retangulo = {
    largura: 15,
    altura: 15
};

const resultadoRetangulo = calcularRetangulo(retangulo); 

// Verifica se uma pessoa é maior de idade
// Sua implementação aqui

function ehAdulto(pessoa) {
    const { idade } = pessoa;
    return idade >= 18;
}

const pessoa = {
    nome: 'John',
    idade: 25,
    cidade: 'New York'
};

const resultadoEhAdulto = ehAdulto(pessoa); 

// Concatena os valores de um objeto em uma string
// Sua implementação aqui

function concatenaValores(objeto) {
    const valores = Object.values(objeto).join(' ');
    return valores;
}

const exemplo = {
    nome: 'Alice',
    idade: 30,
    cidade: 'São Paulo'
};

const resultadoConcatenacao = concatenaValores(exemplo); 

console.log(resultadoConcatenacao);

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
