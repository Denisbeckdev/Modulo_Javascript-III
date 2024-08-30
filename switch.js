// Retorna o dia da semana correspondente a um número
// Sua implementação aqui

function retornaDiaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3:
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }
}

// Retorna o preço do produto com base no código de produto
// Sua implementação aqui

function retornaPrecoProduto(codigo) {
    switch (codigo) {
        case 'A':
            return 'Preço: 10.99';
        case 'B':
            return 'Preço: 5.99';
        case 'C':
            return 'Preço: 7.50';
        default:
            return 'Código inválido';
    }
}

// Retorna a categoria do produto com base no tipo de produto
// Sua implementação aqui

function retornaCategoriaProduto(produto) {
    switch (produto) {
        case 'Eletrônicos':
            return 'Categoria: Tecnologia';
        case 'Roupas':
            return 'Categoria: Moda';
        case 'Alimentos':
            return 'Categoria: Alimentação';
        default:
            return 'Categoria desconhecida';
    }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };