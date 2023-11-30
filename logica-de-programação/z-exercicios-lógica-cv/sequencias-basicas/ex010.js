/*
10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/
let altura = 1.70
let largura = 2
let area = altura * largura
let tinta_necessaria = area / 2
console.log(`Será necessário ${tinta_necessaria} litros de tinta para pintar uma parede de ${area}m². (Considerando que 1L de tinta pinta 2m².)`)