// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

function calcFinalPrice(rentDays, travellDistance) {
    return (rentDays * 90) + (travellDistance * 0.20)
}

console.log(calcFinalPrice(1,10).toFixed(2))