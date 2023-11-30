// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.
function discountPrice(price, discount) {
    let response = price - (price / 100) * discount
    return `o produto que custa R$${price}, com o desconto de ${discount}%, irá custar R$${response}`
};
console.log(discountPrice(100, 17))