/*
9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/
let dinheiro_real = 100
let dinheiro_dolar = 3.45
console.log(`Considerando a cotação do dólar como R$${dinheiro_dolar}, você poderá comprar u$${(dinheiro_real / dinheiro_dolar).toFixed(2)} com r$${dinheiro_real}`)